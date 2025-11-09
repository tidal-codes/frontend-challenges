import type { Note } from "../types";

export const addNotesToLocalStorage = (note: Note) => {
    const notes = getNotesFromLocalStorage();
    notes.push(note)
    localStorage.setItem('tasks', JSON.stringify(notes))

}
export const getNotesFromLocalStorage = (): Note[] => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}
export const changeNotePositionInLS = (noteId: string, pos: { x: number, y: number }) => {
    const notes = getNotesFromLocalStorage()
    localStorage.setItem("tasks",
        JSON.stringify(notes.map(note => note.id === noteId ? ({ ...note, ...pos }) : note))
    )

}