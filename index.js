const express = require('express');
const productsRouter = require('./src/routes/products');
const categoriesRouter = require('./src/routes/categories');
const {loginRouter , registerRouter}= require('./src/routes/user');


PORT = "8080";


const app = express();


app.use("/products",productsRouter);
app.use("/categories",categoriesRouter);
app.use("/login",loginRouter);
app.use("/register",registerRouter);

app.get("/",(req,res)=>{

    res.send("Hello There,  you can use /products , /categories , /login , /register");

})

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
  });