import type { Request, Response } from 'express';
import { getProductsService } from '../services/products.service';

const getProducts = async (_req: Request, res: Response): Promise<any> => {
  const data = await getProductsService();
  return res.json({ recordset: data.recordset });
};

export { getProducts };
