const usersModel = require('../models/usersModel');

let yup = require('yup');


exports.login  =  (req,res) => {

    let user = req.body;

    const vScheme = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    }).noUnknown();

    try{
        vScheme.validateSync(user, {
            strict: true,
          });

        res.send( usersModel.checkUser(user) );
    }
    catch(error){
        res.send(error.toString());
    }

}
    
exports.register  =  (req,res) => {
    
    let user = req.body;
    
    const vScheme = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(6 , "password must be at least 6 character"),
        passwordRepeat: yup.string().required(),
    }).noUnknown();

    try{
        vScheme.validateSync(user, {
            strict: true,
          });

        if ( user.password !== user.passwordRepeat ) throw "password and password repeat are not equal" 

        res.send( usersModel.addUser(user) );
    }
    catch(error){
        res.send(error.toString());
    }
        
}
