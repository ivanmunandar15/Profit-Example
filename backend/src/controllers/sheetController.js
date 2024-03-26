const sheetService = require('../services/sheetServices');

const getProducts = async (req, res) => {
    try {
        const products = await sheetService.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await sheetService.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name } = req.body;
        const product = await sheetService.createProduct(name);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedProduct = await sheetService.updateProduct(id, name);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await sheetService.deleteProduct(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};