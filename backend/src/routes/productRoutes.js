const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.post('/', controller.createProduct);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProductName);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
