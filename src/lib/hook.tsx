"use client";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import { Content, useEditor as useTiptapEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef, useState } from "react";
import Placeholder from "@tiptap/extension-placeholder";

export const useEditor = () => {
  return useTiptapEditor({
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

    autofocus: "end",
  });
};

export default useEditor;
