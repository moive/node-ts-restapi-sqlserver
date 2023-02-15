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
  console.log(name, description, quantity);
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .query(queries.addNewProduct);
  return result;
};

export { getProductsService, createProductService };
