const categoriesModel = require('../models/categoriesModel');
let yup = require('yup');

//gets all categories
exports.getCategories  =  (req,res) => {

    res.send(categoriesModel.get());

}
    
// gets product by it's id from the model and if not found sends to client that the product is not found
exports.getCategoryById  =  (req,res) => {
    
     res.send( categoriesModel.find(req.params.id) || "category not found" );
        
}


//validating with yup the product need to be created, then sending it to the model to create it
//the model returns the product after created
exports.createCategory =  (req,res) => {

    let category = req.body;
    
    const vScheme = yup.object({
        name: yup.string().required().min(3, 'length Must be more than 3'),
    }).noUnknown();

    try{
        vScheme.validateSync(category, {
            strict: true,
          });

        res.send( categoriesModel.create(category) );
    }
    catch(error){
        res.send(error.toString());
    }
       
}

//the same concept of creating category but updating with category id and not all fileld of the validation schema are required
exports.updateCategory =  (req,res) => {
    
    let id = req.params.id;
    let category = req.body;

    const vScheme = yup.object({
        name: yup.string().min(3, 'length Must be more than 3'),
    }).noUnknown();

    try{
        vScheme.validateSync(category, {
            strict: true,
          });

        res.send( categoriesModel.update(id,category));
    }
    catch(error){
        res.send(error.toString());
    }    
       
}

//delets category by sending id to the categories model
exports.deleteCategory  =  (req,res) => {
    
    let id = req.params.id;
    
    res.send( categoriesModel.delete(id) );
       
}





