import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './infrastructure/web/express/routes/postRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', postRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});