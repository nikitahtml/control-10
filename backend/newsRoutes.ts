import express from 'express';
import { getNewsList, getNewsById, createNews, deleteNews, getComments, createComment, deleteComment } from './services';

const router = express.Router();

router.get('/news', getNewsList);
router.get('/news/:id', getNewsById);
router.post('/news', createNews);
router.delete('/news/:id', deleteNews);

router.get('/comments', getComments);
router.post('/comments', createComment);
router.delete('/comments/:id', deleteComment);

export default router;

