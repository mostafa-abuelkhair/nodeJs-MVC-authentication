const express = require('express');
const {getCategories,getCategoryById,createCategory,updateCategory,deleteCategory} = require('../controllers/categoriesController');

const router = express.Router();

// middleware that is specific to this router
router.use(express.json());



//here the CURD methodes routes to it's controllers
router.get('/', getCategories);

router.get('/:id', getCategoryById);

router.post('/', createCategory);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;