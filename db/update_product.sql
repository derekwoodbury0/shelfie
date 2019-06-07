UPDATE products
set name = ${name}, price = ${price}, img = ${imageUrl}
WHERE id = ${id};

SELECT * FROM products;