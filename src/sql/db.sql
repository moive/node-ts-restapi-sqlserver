CREATE DATABASE webstore;
GO

USE webstore;

GO

CREATE TABLE Products (
	Id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(100),
	Description TEXT,
	Quantity INT
);

EXEC sp_help Products;

INSERT INTO Products (Name, Description, Quantity)
VALUES ('Laptop', 'Laptop Lenovo', 10),
('Mouse','Mouse Microsoft',20);

SELECT * FROM Products;
