const Product = require('../models/Product');

// pobieranie wszystkich produktow
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// tworzenie nowego produktu
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    const product = new Product({ name, description, price, stock, category });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct };
