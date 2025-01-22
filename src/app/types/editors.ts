import { Level } from "@tiptap/extension-heading";
import { Editor } from "@tiptap/react";

export type EditorActions =
  | { type: "heading"; level: Level }
  | { type: "list"; listType: "ordered" | "bullet" };

export type EditorToolItemsType = {
  type: "button";
  label?: string;
  desc?: string;
  icon?: React.ComponentType;
  action?: EditorActions;
  isActive?: (editor: Editor) => boolean;
};
