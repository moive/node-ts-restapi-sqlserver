import type { Request, Response } from 'express';
import {
  createProductService,
  deleteProductService,
  getProductByIdService,
  getProductsService
} from '../services/products.service';
import { ResponseError } from '../utils/custom.error';
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
    // console.log(e);
    return res.send({ ok: false, error: e.message });
  }
};

const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await getProductByIdService(Number(id));
    if (result.rowsAffected <= 0) throw new ResponseError('Not found', 404);
    return res.send(result.recordset[0]);
  } catch (e: any) {
    return res.status(e.statusCode).send({ ok: false, error: e.message });
  }
};

const deleteProductById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const result = await deleteProductService(Number(id));
    if (result.rowsAffected <= 0) throw new ResponseError('Not found', 404);
    return res.sendStatus(204);
  } catch (e: any) {
    return res.status(e.statusCode).send({ ok: false, message: e.message });
  }
};
export { getProducts, createProduct, getProductById, deleteProductById };
