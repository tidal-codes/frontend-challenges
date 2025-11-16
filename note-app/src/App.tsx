import AddNote from './components/addNote';
import NoteList from './components/NoteList';
import { useNotes } from './hooks/useNotes';
import './style.css'

const App = () => {
    const { notes, addNotes } = useNotes();
    console.log(notes)
    return (
        <div>
            <AddNote addNotes={addNotes}/>
            <NoteList notes={notes}/>
        </div>
    );
}

export default App;
