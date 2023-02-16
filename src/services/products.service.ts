import sql from 'mssql';
import { getConnection, queries } from '../database';
import type { IProduct } from '../interfaces/products.interface';
import { ResponseError } from '../utils/custom.error';

const getProductsService = async (): Promise<any> => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.allProducts);
    return result;
  } catch (e: any) {
    throw new ResponseError(e.message);
  }
};

const geTotalProductsService = async (): Promise<any> => {
  try {
    const pool = await getConnection();
    const total = await pool.request().query(queries.getTotalProducts);
    return total;
  } catch (e: any) {
    throw new ResponseError(e.message);
  }
};

const createProductService = async ({
  name,
  description,
  quantity
}: IProduct): Promise<any> => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(queries.addNewProduct);
    return result;
  } catch (e: any) {
    throw new ResponseError(e.message);
  }
};

const getProductByIdService = async (id: number): Promise<any> => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('Id', sql.Int, id)
      .query(queries.getProductById);
    return result;
  } catch (e: any) {
    throw new ResponseError(e.message);
  }
};

const deleteProductService = async (id: number): Promise<any> => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('Id', sql.Int, id)
      .query(queries.deleteProductById);
    return result;
  } catch (e: any) {
    throw new ResponseError(e.message);
  }
};

const updateProductService = async ({
  id,
  name,
  description,
  quantity
}: IProduct): Promise<any> => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('Id', sql.Int, id)
      .input('Name', sql.VarChar, name)
      .input('Description', sql.Text, description)
      .input('Quantity', sql.Int, quantity)
      .query(queries.updateProduct);

    if (result.rowsAffected <= 0) throw new ResponseError('Not found3', 400);

    return result;
  } catch (e: any) {
    throw new ResponseError(e.message, e.statusCode);
  }
};

export {
  getProductsService,
  geTotalProductsService,
  createProductService,
  getProductByIdService,
  deleteProductService,
  updateProductService
};
