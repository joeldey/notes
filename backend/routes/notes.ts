import { Router } from 'express';
import prisma from '../db';

const router = Router();

router.get('/', async (req, res) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
});

router.post('/', async (req, res) => {
    const { content } = req.body;
    const newNote = await prisma.note.create({ data: { content } });
    res.json(newNote);
});

export default router;