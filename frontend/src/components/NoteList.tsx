import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { fetchNotes } from '../api';
import styles from './NoteList.module.css';

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
        <div className={styles.container}>
            <h2 className={styles.title}>Your Notes</h2>
            {notes.length === 0 ? (
                <p className={styles.emptyState}>No notes yet. Add one below!</p>
            ) : (
                <ul className={styles.notesList}>
                    {notes.map((note) => (
                        <li key={note.id} className={styles.noteItem}>
                            <p className={styles.noteContent}>{note.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteList;