import { useDrag } from "../hooks/useDrag";
import { changeNotePositionInLS } from "../utils/LsManager";

const Note = ({ id, text, x, y }: { id: string, text: string, x: number, y: number }) => {
    const { pos, handleDragStart, handleDragging, handleDragEnd } = useDrag(x, y);
    changeNotePositionInLS(id, pos);
    return (
        <div
            className='note-container'
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
