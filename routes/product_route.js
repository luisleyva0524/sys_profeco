
const model_product = require('../controllers/product_controller');
const express = require('express');
const router = express.Router();

router
    //.route('/')  
    .get('/all',model_product.getProducts)
    .post('/add',model_product.productAdd);
router
    .route('/:id')  
    .get(model_product.findProductById)
    // .put(model_user.userUpdate)
    .delete(model_product.productDelete);
      

module.exports = router;