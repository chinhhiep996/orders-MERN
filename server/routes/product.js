const express = require('express');

const { 
    createProduct, 
    getAllProducts, 
    getProduct,
    editProduct,
    deleteProduct
} = require('../controllers/product');

const router = express.Router();

router.post('/api/products', createProduct);
router.get('/api/products', getAllProducts);
router.get('/api/products/:productId', getProduct);
router.put('/api/products/:productId', editProduct);
router.delete('/api/products/:productId', deleteProduct);

module.exports = router;