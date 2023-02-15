import type { Request, Response } from 'express';
import {
  createProductService,
  getProductsService
} from '../services/products.service';
import { errorFielRequired } from '../utils/required.error';

const getProducts = async (_req: Request, res: Response): Promise<any> => {
  const data = await getProductsService();
  return res.json({ recordset: data.recordset });
};

const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, description, quantity } = req.body;
    errorFielRequired({ name });
    errorFielRequired({ description });
    errorFielRequired({ quantity });

    await createProductService({
      name,
      description,
      quantity
    });

    return res.json({ ok: true, result: { name, description, quantity } });
  } catch (e: any) {
    console.log(e);
    return res.send({ ok: false, error: e.message });
  }
};

export { getProducts, createProduct };
