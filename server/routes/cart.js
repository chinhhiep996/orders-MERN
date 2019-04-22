const express = require('express');

const { createCart, changeAmount, getCarts } = require('../controllers/cart');

const router = express.Router();

router.get('/api/carts', getCarts);
router.post('/api/carts', createCart);
router.put('/api/carts', changeAmount);

module.exports = router;