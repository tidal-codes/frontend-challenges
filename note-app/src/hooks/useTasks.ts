import { useState } from "react";
import { addNotesToLocalStorage, getNotesFromLocalStorage } from "../utils/LsManager";
import type { Note } from "../types";

export function useTasks() {
    const [notes, setNotes] = useState(() => getNotesFromLocalStorage() as Note[])
    const addNotes = (task: Note) => {
        setNotes(prev => [...prev, task]);
        addNotesToLocalStorage(task);
    }
    return {
        notes,
        addNotes
    }
}