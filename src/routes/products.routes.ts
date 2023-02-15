import { Router } from 'express';
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts
} from '../controllers/products.controller';

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById);

export { router as productsRouter };
