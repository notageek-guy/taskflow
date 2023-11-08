"use client";

import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

interface EditorProps {
  description: string;
  onChange: (richText: string) => void;
}
export default function Editor(props: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "text-xl font-bold",
          },
        },
      }),
    ],
    content: props.description,
    editorProps: {
      attributes: {
        class:
          "rounded-md  border border-input bg-background px-3 py-2 my-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      props.onChange(editor?.getHTML());
    },
  });
  return (
    <div className="flex flex-col justify-stretch ">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
