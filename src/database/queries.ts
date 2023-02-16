export const queries = {
  allProducts: 'SELECT * FROM products',
  addNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
  getProductById: 'SELECT * FROM Products WHERE Id = @id',
  deleteProductById: 'DELETE FROM Products WHERE Id = @id',
  getTotalProducts: 'SELECT COUNT(*) FROM Products',
  updateProduct:
    'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id'
};
