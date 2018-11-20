const path = require('path');
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/product');


router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.getPostProduct);



module.exports = router;