const express = require('express');
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controllers/productsController');
const auth = require('../middlewares/authentication');

const router = express.Router();

// middleware that is specific to this router
router.use(express.json());



//here the CURD methodes routes to it's controllers
router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', auth.verify, createProduct);

router.put('/:id', auth.verify, updateProduct);

router.delete('/:id', auth.verify, deleteProduct);

module.exports = router;