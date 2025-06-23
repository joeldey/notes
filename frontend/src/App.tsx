import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import styles from './App.module.css';

interface Note {
    id: number;
    content: string;
}

function App() {
    const [notes, setNotes] = useState<Note[]>([]);

    const handleNoteAdded = (note: Note) => {
        setNotes([...notes, note]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Notes App</h1>
            <NoteList notes={notes} setNotes={setNotes} />
            <NoteForm onNoteAdded={handleNoteAdded} />
        </div>
    );
}

export default App; 