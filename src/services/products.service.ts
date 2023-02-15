import { getConnection } from '../database/connection';
import type { IProduct } from '../interfaces/products.interface';
import sql from 'mssql';

const getProductsService = async (): Promise<any> => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM products');
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
    .query(
      'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)'
    );
  return result;
};

export { getProductsService, createProductService };
