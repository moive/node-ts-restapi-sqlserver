import sql from 'mssql';
import { getConnection, queries } from '../database';
import type { IProduct } from '../interfaces/products.interface';

const getProductsService = async (): Promise<any> => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.allProducts);
  return result;
};

const createProductService = async ({
  name,
  description,
  quantity
}: IProduct): Promise<any> => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .query(queries.addNewProduct);
  return result;
};

const getProductByIdService = async (id: number): Promise<any> => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('Id', sql.Int, id)
    .query(queries.getProductById);
  return result;
};

export { getProductsService, createProductService, getProductByIdService };
