import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const dbPath = path.join(__dirname, 'db.json');

router.get('/', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        const db = JSON.parse(data);
        res.json(db.news || []);
    });
});

router.post('/', (req, res) => {
    const newNews = req.body;
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        const db = JSON.parse(data);
        db.news = db.news || [];
        db.news.push(newNews);
        fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save data' });
            }
            res.status(201).json(newNews);
        });
    });
});

export default router;
