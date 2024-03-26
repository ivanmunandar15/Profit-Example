const express = require('express');
const router = express.Router();
const sheetController = require('../controllers/sheetController');

// Create a new product
router.post('/', sheetController.createProduct);

// Get a product by ID
router.get('/:id', sheetController.getProduct);

// Update a product by ID
router.put('/:id', sheetController.updateProduct);

// Delete a product by ID
router.delete('/:id', sheetController.deleteProduct);

module.exports = router;
