const productService = require('../services/productService');

async function createProduct(req, res) {
  const { name } = req.body;
  try {
    const product = await productService.createProduct(name);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const product = await productService.getProductById(parseInt(id));
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateProductName(req, res) {
  const { id } = req.params;
  const { newName } = req.body;
  try {
    const product = await productService.updateProductName(parseInt(id), newName);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await productService.deleteProduct(parseInt(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createProduct,
  getProductById,
  updateProductName,
  deleteProduct
};
