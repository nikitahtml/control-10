import express from 'express';
import { getComments, addComment } from '../services';

const router = express.Router();

router.get('/news/:id/comments', async (req, res) => {
    try {
        const id = req.params.id;
        const comments = await getComments(id);
        res.json(comments);
    } catch (error) {
        res.status(500).send('Ошибка при получении комментариев');
    }
});

router.post('/news/:id/comments', async (req, res) => {
    try {
        const id = req.params.id;
        const comment = req.body;
        await addComment(id, comment);
        res.status(201).send('Комментарий добавлен');
    } catch (error) {
        res.status(500).send('Ошибка при добавлении комментария');
    }
});

export default router;
