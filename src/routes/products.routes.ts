import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/products.controller';

const router = Router();

router.get('/all', getProducts);
router.post('/', createProduct);

export { router as productsRouter };
