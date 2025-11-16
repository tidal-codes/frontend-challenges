import type { Note as NoteType } from '../types';
import Note from './Note';

const NoteList = ({ notes }: { notes: NoteType[] }) => {
    return (
        <div className='notes-container'>
            {notes.map(note => <Note key={note.id}
                id={note.id}
                text={note.text}
                x={note.x}
                y={note.y}
                width={note.width}
                height={note.height}
            />)}
        </div>
    );
}

export default NoteList;
