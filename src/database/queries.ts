export const queries = {
  allProducts: 'SELECT * FROM products',
  addNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)'
};
