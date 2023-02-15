import express from 'express';
import morgan from 'morgan';
import './database/connection';
import { productsRouter } from './routes/products.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/products', productsRouter);

export default app;
