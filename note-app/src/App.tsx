import AddNote from './components/addNote';
import NoteList from './components/NoteList';
import { useTasks } from './hooks/useTasks';
import './style.css'

const App = () => {
    const { notes, addNotes } = useTasks();
    return (
        <div>
            <AddNote addNotes={addNotes}/>
            <NoteList notes={notes}/>
        </div>
    );
}

export default App;
