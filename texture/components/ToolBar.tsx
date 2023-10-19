"use client";

import { type Editor } from "@tiptap/react";

import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2
} from "lucide-react";

import { Toggle } from "./ui/toggle";

type Props = {
    editor: Editor | null;
}

export function Toolbar({ editor }: Props) {
    if (!editor) {
        return null;
    }

    return (
        <div className="border border-input bg-transparent rounded-md">
            <Toggle 
                
            />
        </div>
    )
}