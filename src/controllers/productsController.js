
const productsModel = require('../models/productsModel');
let yup = require('yup');

//gets all products
exports.getProducts  =  (req,res) => {

    res.send(productsModel.get());

}
    
// gets product by it's id from the model and if not found sends to client that the product is not found
exports.getProductById  =  (req,res) => {
    
     res.send( productsModel.find(req.params.id) || "Product not found" );
        
}


//validating with yup the product need to be created, then sending it to the model to create it
//the model returns the product after created
exports.createProduct  =  (req,res) => {

    let product = req.body;
    
    const vScheme = yup.object({
        name: yup.string().required().min(3, 'length Must be more than 3'),
        price: yup.number().required(),
        category_id: yup.number().required(),
    }).noUnknown();

    try{
        vScheme.validateSync(product, {strict: true});

        res.send( productsModel.create(product) );
    }
    catch(error){
        res.send(error.toString());
    }
       
}

//the same concept of creating product but updating with product id and not all fileld of the validation schema are required
exports.updateProduct =  (req,res) => {
    
    let id = req.params.id;
    let product = req.body;

    const vScheme = yup.object({
        name: yup.string().required().min(3, 'length Must be more than 3'),
        price: yup.number().required(),
        category_id: yup.number().required()
    }).noUnknown();

    try{
        vScheme.validateSync(product, {strict: true});

        res.send( productsModel.update(id,product));
    }
    catch(error){
        res.send(error.toString());
    }    
       
}

//delets product by sending id to the products model
exports.deleteProduct  =  (req,res) => {
    
    let id = req.params.id;
    
    res.send( productsModel.delete(id) );
       
}





