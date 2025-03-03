import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { fetchNotes } from '../api';

interface Note {
    id: number;
    content: string;
}

interface NoteListProps {
    notes: Note[];
    setNotes: Dispatch<SetStateAction<Note[]>>;
}

const NoteList = ({ notes, setNotes }: NoteListProps) => {
    useEffect(() => {
        fetchNotes().then(setNotes);
    }, [setNotes]);

    return (
        <div className="note-list">
            <h2>Your Notes</h2>
            {notes.length === 0 ? (
                <p>No notes yet. Add one below!</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {notes.map((note) => (
                        <li key={note.id} style={{
                            padding: '10px',
                            margin: '10px 0',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '5px'
                        }}>
                            {note.content}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteList;