"use client";
import React, { useCallback } from "react";
import { EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import useEditor from "@/lib/hook";
import { EditorActions } from "@/app/types/editors";
import { EditorToolItems } from "@/lib/Constants";
import MenuBtn from "./MenuBtn";

const Editor = () => {
  const editor = useEditor();

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
