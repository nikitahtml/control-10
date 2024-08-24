import express from 'express';
import bodyParser from 'body-parser';
import newsRoutes from './newsRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', newsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
