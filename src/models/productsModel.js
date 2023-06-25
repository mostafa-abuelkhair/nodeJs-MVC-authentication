
let products = [];
let categories = [];

exports.get = () => { return products }


const categoriesModel = require('../models/categoriesModel');

exports.find = (id) => { 

    //finds product by it's id
    return products.find( p => p.id==id );

 }

 exports.create = (p) => {

    p.id = new Date().valueOf();

    categories = categoriesModel.get();
    
    p.category = categories.find( c => c.id === p.category_id );

    if(p.category === undefined){ return "category not found"}

    else{
    products.push(p);
    return p;
    }
 }

 exports.update = (id , p) => { 

    categories = categoriesModel.get();

    let i = products.findIndex( p => p.id==id );

    if (i === -1){return "There is no product with this id";}
    else{

        //patch the properties found in the input object to the product need to be updated
        Object.keys(products[i]).forEach( k => {products[i][k] = p[k] || products[i][k]} );

        //changes the category if needed to be updated, if the new category id not found, it leaves the category not updated
        if (p.categoryId !== undefined){ products[i].category = categories.find( c => c.id === p.category_id ) || products[i].category}

        return products[i];
        }
 }

 exports.delete = (id) => { 
    let i = products.findIndex( p => p.id==id );

    let p = products[i];
    
    if(i===-1){return "product not found"}

    else{products.splice(i,1);}

    return p;
 
  }

