import type { Note } from "../types";

export function isOverlaped(noteId: string, notes: Note[]) {
    const n = notes.filter(note => note.id !== noteId);
    const givenNote = notes.find(note => note.id === noteId)

    if (!givenNote) throw Error('wrong note id');

    let isOverlaped = false;

    n.forEach(note => {
        // if (
        //     givenNote.x + givenNote.width > note.x + note.width
        // ) {
        //     isOverlaped = true;
        // }
        // console.log(note.x)
        // console.log(givenNote.x)
    })

    return isOverlaped;

}