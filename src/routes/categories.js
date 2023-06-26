const express = require('express');
const {getCategories,getCategoryById,createCategory,updateCategory,deleteCategory} = require('../controllers/categoriesController');
const auth = require('../middlewares/authentication');

const router = express.Router();

// middleware that is specific to this router
router.use(express.json());

//

//here the CURD methodes routes to it's controllers
router.get('/', getCategories);

router.get('/:id', getCategoryById);

router.post('/', auth.verify, createCategory);

router.put('/:id', auth.verify, updateCategory);

router.delete('/:id', auth.verify, deleteCategory);

module.exports = router;