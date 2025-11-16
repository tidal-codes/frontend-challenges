import { useState } from "react";
import { addNotesToLocalStorage, getNotesFromLocalStorage, updateNoteInLS } from "../utils/LsManager";
import type { AtLeastOne, Note } from "../types";

export function useNotes() {
    const [notes, setNotes] = useState(() => getNotesFromLocalStorage() as Note[])
    const addNotes = (task: Note) => {
        setNotes(prev => [...prev, task]);
        addNotesToLocalStorage(task);
    }
    const updateNote = (id: string, newNote: AtLeastOne<Note>) => {
        console.log('updated')
        setNotes(prev => prev.map(note => note.id === id ? { ...note, ...newNote } : note))
        updateNoteInLS(id, newNote)
    }
    return {
        notes,
        addNotes,
        updateNote
    }
}