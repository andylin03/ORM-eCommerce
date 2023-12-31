const { Product } = require('../models');

const productData = [
    {
        product_name: 'Plain T-Shirt',
        price: 10.99,
        stock: 15,
        category_id: 1,
    },
    {
        product_name: 'Basketball Sneakers',
        price: 190.0,
        stock: 15,
        category_id: 5,
    },
    {
        product_name: 'Branded Baseball Hat',
        price: 23.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: 'Top 40 Music Compilation Vinyl Record',
        price: 12.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Cargo Shorts',
        price: 19.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;