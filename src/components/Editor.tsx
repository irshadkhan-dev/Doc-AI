"use client";
import React from "react";

import {
  useEditor,
  EditorContent,
  FloatingMenu,
  EditorProvider,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import { cn } from "@/lib/utils";

const BUTTON_CONFIG = [
  {
    label: "H1",
    labelHeading: "Heading Level 1",
    labelDesc: "Big section heading",
    action: "toggleHeading",
    options: { level: 1 },
    activekey: "heading",
  },
  {
    label: "H2",
    labelHeading: "Heading Level 2",
    labelDesc: "Medium section heading",
    action: "toggleHeading",
    options: { level: 2 },
    activekey: "heading",
  },
  {
    label: "H3",
    labelHeading: "Heading Level 3",
    labelDesc: "Small section heading",
    action: "toggleHeading",
    options: { level: 3 },
    activekey: "heading",
  },
] as const;

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    immediatelyRender: false,
    autofocus: true,
    injectCSS: true,
  });
  return (
    <>
      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{ duration: 10 }}
          className="mt-32"
        >
          <div className="w-72 h-60 bg-[#F2F0EF] border border-gray-400 rounded-md p-3 overflow-y-scroll no-scrollbar">
            <div className="w-full flex flex-col space-y-2">
              {BUTTON_CONFIG.map(
                ({ options, action, activekey, ...item }, i) => (
                  <button
                    key={item.label}
                    className={cn(
                      `flex items-center space-x-2 p-2 bg-white shadow-md rounded-md ${
                        editor.isActive(activekey, options || {})
                          ? "is-active"
                          : ""
                      }`
                    )}
                    onClick={() =>
                      editor
                        .chain()
                        .focus()
                        [action](options || {})
                        .run()
                    }
                  >
                    <span className="rounded-lg border border-gray-300 text-xl font-semibold px-2 py-1 bg-white">
                      {item.label}
                    </span>
                    <div className="flex flex-col justify-center">
                      <span className="font-semibold text-sm">
                        {item.labelHeading}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.labelDesc}
                      </span>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu editor={editor}>
          <div className="w-full flex items-center space-x-2">
            <button className="border-none bg-black text-white">H1</button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} className="h-full w-full" />
    </>
  );
};

export default Editor;
