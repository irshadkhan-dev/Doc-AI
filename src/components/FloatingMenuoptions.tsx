"use client";
import { FloatingMenu, useCurrentEditor } from "@tiptap/react";
import React from "react";

const FloatingMenuoptions = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  return (
    <FloatingMenu
      editor={editor}
      tippyOptions={{ duration: 10 }}
      className="mt-32"
    >
      <div className="w-full flex flex-col space-y-2 px-2 py-1">
        <div className="w-full border border-gray-400 rounded-md p-2">
          <button className="border-none flex items-center space-x-2">
            <span>H1</span>
            <span>Heading 1</span>
          </button>
          <button className="border-none flex items-center space-x-2">
            <span>H1</span>
            <span>Heading 1</span>
          </button>
          <button className="border-none flex items-center space-x-2">
            <span>H1</span>
            <span>Heading 1</span>
          </button>
        </div>
      </div>
    </FloatingMenu>
  );
};

export default FloatingMenuoptions;
