import { EditorToolItemsType } from "@/app/types/editors";
import { Heading1, Heading2, Heading3, List } from "lucide-react";

export const EditorToolItems: EditorToolItemsType[] = [
  {
    type: "button",
    label: "Heading 1",
    desc: "Large heading",
    icon: Heading1,
    action: { type: "heading", level: 1 },
    isActive: (editor) => editor.isActive("heading", { level: 1 }),
  },
  {
    type: "button",
    label: "Heading 2",
    desc: "Medium heading",
    icon: Heading2,
    action: { type: "heading", level: 2 },
    isActive: (editor) => editor.isActive("heading", { level: 2 }),
  },
  {
    type: "button",
    label: "Heading 3",
    desc: "Small heading",
    icon: Heading3,
    action: { type: "heading", level: 3 },
    isActive: (editor) => editor.isActive("heading", { level: 3 }),
  },
  {
    type: "button",
    label: "Bulleted list",
    desc: "Simple bullet list",
    icon: List,
    action: { type: "list", listType: "bullet" },
    isActive: (editor) => editor.isActive("bulletList"),
  },
];
