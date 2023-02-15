import express from 'express';
import morgan from 'morgan';
import './database/connection';
import { productsRouter } from './routes/products.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/products', productsRouter);

export default app;
// https://www.youtube.com/watch?v=ReK0kscoF8o
