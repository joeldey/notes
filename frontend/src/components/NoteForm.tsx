import { useState, FormEvent } from 'react';
import { createNote } from '../api';

interface Note {
    id: number;
    content: string;
}

interface NoteFormProps {
    onNoteAdded: (note: Note) => void;
}

const NoteForm = ({ onNoteAdded }: NoteFormProps) => {
    const [newNote, setNewNote] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!newNote.trim()) return;

        const note = await createNote(newNote);
        setNewNote('');
        onNoteAdded(note);
    };

    return (
        <div className="note-form" style={{ marginTop: '20px' }}>
            <h2>Add New Note</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd'
                        }}
                        placeholder="Write your note here..."
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    disabled={!newNote.trim()}
                >
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default NoteForm;