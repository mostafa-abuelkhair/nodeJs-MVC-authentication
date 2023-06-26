const jwt = require("jsonwebtoken");

const secretKey = "secret-1234";

exports.generateToken = (user)=>{

    const token = jwt.sign(user, secretKey);

    return token;
    
}

exports.verify = (req,res,next)=>{

    try{

        const token = req.headers.token;

        const decoded = jwt.verify(token, secretKey);

        next();
    }
    catch (error){

        res.send("Not Authenticated")

    }
    
}
