import { Router } from 'express';
import { getProducts } from '../controllers/products.controller';

const router = Router();

router.get('/all', getProducts);

export { router as productsRouter };
