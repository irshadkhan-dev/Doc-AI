"use client";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import { useEditor as useTiptapEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef, useState } from "react";
import Placeholder from "@tiptap/extension-placeholder";

export const useEditor = () => {
  const [contents, setContent] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const savedContent = localStorage.getItem("content");
      return savedContent ? JSON.parse(savedContent) : null;
    }
    return null;
  });

  useEffect(() => {
    if (contents !== null) {
      localStorage.setItem("content", JSON.stringify(contents));
    }
  }, [contents]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    content: contents,
    autofocus: "end",
    onUpdate({ editor }) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setContent(editor.getHTML());
      }, 4000);
    },
  });
};

export default useEditor;
