"use client";

import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  ListOrdered,
  Heading2,
  List,
} from "lucide-react";

import { Toggle } from "../ui/toggle";
type Props = {
  editor: Editor | null;
};

export default function Toolbar(props: Props) {
  if (!props.editor) return null;
  return (
    <div className="rounded-bl-md p-1 flex flex-row items-center gap-1 bg-transparent border-input border">
      <Toggle
        size="sm"
        pressed={props.editor.isActive("heading")}
        onPressedChange={() =>
          props.editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={props.editor.isActive("bold")}
        onPressedChange={() => props.editor?.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={props.editor.isActive("italic")}
        onPressedChange={() =>
          props.editor?.chain().focus().toggleItalic().run()
        }
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={props.editor.isActive("strike")}
        onPressedChange={() =>
          props.editor?.chain().focus().toggleStrike().run()
        }
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={props.editor.isActive("bulletList")}
        onPressedChange={() =>
          props.editor?.chain().focus().toggleBulletList().run()
        }
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={props.editor.isActive("orderedList")}
        onPressedChange={() =>
          props.editor?.chain().focus().toggleOrderedList().run()
        }
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
