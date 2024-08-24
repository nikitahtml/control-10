import { News, Comment } from './models';
import db from 'db.json';

export const getNews = (id: number): News | undefined => {
    const index = db.news.findIndex((news: News) => news.id === id);
    return db.news[index];
};

export const deleteNews = (id: number): void => {
    db.news = db.news.filter((news: News) => news.id !== id);
};

export const getComments = (newsId: number): Comment[] => {
    return db.comments.filter((comment: Comment) => comment.newsId === newsId);
};
