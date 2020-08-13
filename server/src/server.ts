import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
//Comentarios interessantes 51:11 - Video 2
app.use(express.json());
app.use(routes);

app.listen(3333);
