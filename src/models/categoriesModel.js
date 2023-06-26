
let categories = [];

exports.get = () => { return categories } 


exports.find = (id) => { 

    //finds categories by it's id
    return categories.find( c => c.id==id );

 }

 exports.create = (c) => {

    c.id = new Date().valueOf();

    categories.push(c);

    return c;
 }

 exports.update = (id , c) => { 

    let i = categories.findIndex( c => c.id==id );

    if (i === -1){return "There is no category with this id";}
    else{
        //patch the properties found in the input object to the category need to be updated
        Object.keys(categories[i]).forEach( k => {categories[i][k] = c[k] || categories[i][k]} );

        return categories[i];
        }
 }

 exports.delete = (id) => { 
    let i = categories.findIndex( c => c.id==id );

    let c = categories[i];
    
    if(i===-1){return "no category found with this category id "}

    else{categories.splice(i,1);}

    return c;
 
  }

