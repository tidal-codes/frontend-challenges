import { useEffect, useRef } from "react";
import { useDrag } from "../hooks/useDrag";
import { useNotes } from "../hooks/useNotes";

interface NoteProps {
    id: string
    text: string
    x: number
    y: number
    width: number
    height: number
}


const Note = ({ id, text, x, y}: NoteProps) => {
    const noteContainerRef = useRef<HTMLDivElement | null>(null)
    const { pos, handleDragStart, handleDragging, handleDragEnd } = useDrag(id, x, y);
    const { updateNote } = useNotes()

    useEffect(() => {
        const width = noteContainerRef.current?.getBoundingClientRect().width!;
        const height = noteContainerRef.current?.getBoundingClientRect().height!;
        // console.log(width , height)
        updateNote(id, { width, height })
    }, [])

    return (
        <div
            className='note-container'
            ref={noteContainerRef}
            style={{ left: pos.x, top: pos.y }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragging}
            onMouseUp={handleDragEnd}
        >
            {text}
        </div>
    );
}

export default Note;
