const sheetServices = require('../services/sheetServices');

async function createProduct(req, res) {
    try {
        const { name } = req.body;
        const product = await sheetServices.createProduct(name);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getProduct(req, res) {
    try {
        const id = parseInt(req.params.id);
        const product = await sheetServices.getProduct(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateProduct(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        const updatedProduct = await sheetServices.updateProduct(id, name);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteProduct(req, res) {
    try {
        const id = parseInt(req.params.id);
        const deletedProduct = await sheetServices.deleteProduct(id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};
