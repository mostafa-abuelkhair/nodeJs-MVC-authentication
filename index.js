const express = require('express');
const productsRouter = require('./src/routes/products');
const categoriesRouter = require('./src/routes/categories');

PORT = "8080";


const app = express();


app.use("/products",productsRouter);
app.use("/categories",categoriesRouter);

app.get("/",(req,res)=>{

    res.send("Hello There,  you can use /products and /categories");

})

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
  });