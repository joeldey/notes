import { useState, FormEvent } from 'react';
import { createNote } from '../api';
import styles from './NoteForm.module.css';

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
        <div className={styles.container}>
            <h2 className={styles.title}>Add New Note</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldWrapper}>
                    <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className={styles.textarea}
                        placeholder="Write your note here..."
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={!newNote.trim()}
                >
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default NoteForm;