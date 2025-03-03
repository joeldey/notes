import express from 'express';
import cors from 'cors';
import noteRoutes from './routes/notes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/notes', noteRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));