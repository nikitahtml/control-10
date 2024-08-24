import express from 'express';
import { getNews, createNews, updateNews, deleteNews } from './services';

const router = express.Router();

router.get('/news', async (req, res) => {
    try {
        const news = await getNews();
        res.json(news);
    } catch (error) {
        res.status(500).send('Ошибка при получении новостей');
    }
});

router.post('/news', async (req, res) => {
    try {
        const newsItem = req.body;
        await createNews(newsItem);
        res.status(201).send('Новость создана');
    } catch (error) {
        res.status(500).send('Ошибка при создании новости');
    }
});

router.put('/news/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newsItem = req.body;
        await updateNews(id, newsItem);
        res.send('Новость обновлена');
    } catch (error) {
        res.status(500).send('Ошибка при обновлении новости');
    }
});

router.delete('/news/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await deleteNews(id);
        res.send('Новость удалена');
    } catch (error) {
        res.status(500).send('Ошибка при удалении новости');
    }
});

export default router;
