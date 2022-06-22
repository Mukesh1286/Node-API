const express = require('express')
const router = express.Router();


const { getProducts, newProduct, getSingleProduct, updateProduct, DeleteProduct} =require('../controllers/productController')



router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/:id').put(updateProduct);
router.route('/admin/product/:id').delete(DeleteProduct);

router.route('/admin/product/new').post(newProduct);

module.exports= router