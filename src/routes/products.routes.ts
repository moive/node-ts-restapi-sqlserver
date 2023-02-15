import { Router } from 'express';
import {
  createProduct,
  getProductById,
  getProducts
} from '../controllers/products.controller';

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);

export { router as productsRouter };
