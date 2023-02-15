import { getConnection } from '../database/connection';

const getProductsService = async (): Promise<any> => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM products');
  return result;
};

export { getProductsService };
