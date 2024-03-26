const express = require('express');

const router = express.Router();

const sheetController = require('../controllers/sheetController');

// Routes
router.get('/', sheetController.getProducts);
router.get('/:id', sheetController.getProductById);
router.post('/', sheetController.createProduct);
router.put('/:id', sheetController.updateProduct);
router.delete('/:id', sheetController.deleteProduct);

module.exports = router;
