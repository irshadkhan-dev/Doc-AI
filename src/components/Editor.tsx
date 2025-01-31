"use client";
import React, { useCallback, useRef } from "react";
import {
  EditorContent,
  FloatingMenu,
  BubbleMenu,
  Content,
  useEditor,
} from "@tiptap/react";

import { EditorActions } from "@/app/types/editors";
import { EditorToolItems } from "@/lib/Constants";
import MenuBtn from "./MenuBtn";
import StarterKit from "@tiptap/starter-kit";

import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import Placeholder from "@tiptap/extension-placeholder";

const Editor = ({
  content,
  onUpdate,
}: {
  content: Content;
  onUpdate: (html: string) => void;
}) => {
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList.configure({ keepMarks: true }),
      ListItem,
      Placeholder.configure({
        placeholder: "Begin writing your document..",
      }),
    ],
    immediatelyRender: false,
    injectCSS: true,
    content,
    onUpdate: ({ editor }) => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }

      timeRef.current = setTimeout(() => {
        onUpdate(editor.getHTML());
      }, 3000);
    },
    autofocus: "end",
  });

  const handleAction = useCallback(
    (action: EditorActions) => {
      if (!editor) return;

      switch (action.type) {
        case "heading":
          editor.chain().focus().toggleHeading({ level: action.level }).run();
          break;
        case "list":
          if (action.listType === "bullet") {
            editor.chain().focus().toggleBulletList().run();
          } else {
            editor.chain().focus().toggleOrderedList().run();
          }
      }
    },
    [editor]
  );

  if (!editor) {
    return null;
  }

  return (
    <>
      <FloatingMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="w-72 h-60 absolute bg-[#F2F0EF] overflow-y-scroll no-scrollbar rounded-lg"
      >
        <div className="flex flex-col w-full px-4 py-4 space-y-2">
          {EditorToolItems.map((item, i) => (
            <MenuBtn
              label={item.label!}
              desc={item.desc!}
              icon={item.icon!}
              key={item.label}
              isActive={item.isActive?.(editor)}
              onClick={() => item.action && handleAction(item.action)}
            />
          ))}
        </div>
      </FloatingMenu>

      <BubbleMenu editor={editor}>
        <div className="w-full flex items-center space-x-2">
          <button className="border-none bg-black text-white">H1</button>
        </div>
      </BubbleMenu>

      <EditorContent editor={editor} className="h-full w-full" />
    </>
  );
};

export default Editor;
