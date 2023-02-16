import { Router } from 'express';
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  getTotalProducts,
  updateProduct
} from '../controllers/products.controller';

const router = Router();

router.get('/', getProducts);
router.get('/count', getTotalProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById);
router.put('/:id', updateProduct);

export { router as productsRouter };
