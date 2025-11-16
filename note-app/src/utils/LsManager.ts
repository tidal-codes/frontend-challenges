import type { AtLeastOne, Note } from "../types";

export const addNotesToLocalStorage = (note: Note) => {
    const notes = getNotesFromLocalStorage();
    notes.push(note)
    localStorage.setItem('tasks', JSON.stringify(notes))

}
export const getNotesFromLocalStorage = (): Note[] => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

export const updateNoteInLS = (noteId: string, newNote: AtLeastOne<Note>) => {
    const notes = getNotesFromLocalStorage()
    localStorage.setItem("tasks",
        JSON.stringify(notes.map(note => note.id === noteId ? ({ ...note, ...newNote }) : note))
    )
}