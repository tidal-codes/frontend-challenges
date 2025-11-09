import { useState } from "react";
import type { Note } from "../types";

const AddNote = ({ addNotes }: { addNotes: (task: Note) => void }) => {
    const [value, setValue] = useState("");
    const handleAdd = () => {
        const id = crypto.randomUUID();
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        addNotes({ id, text: value, x, y })
    }
    return (
        <div>
            <input type="text" placeholder="write here ..." value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => handleAdd()}>add</button>
        </div>
    );
}

export default AddNote;
