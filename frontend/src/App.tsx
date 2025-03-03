import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

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
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Notes App</h1>
            <NoteList notes={notes} setNotes={setNotes} />
            <NoteForm onNoteAdded={handleNoteAdded} />
        </div>
    );
}

export default App; 