import axios from 'axios';

const API_URL = 'http://localhost:5000/notes';

export const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const createNote = async (content: string) => {
    const res = await axios.post(API_URL, { content });
    return res.data;
}; 