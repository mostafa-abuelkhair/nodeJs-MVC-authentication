const auth = require('../middlewares/authentication');

let users = [];

exports.addUser = (user) => {
    
    user.id = new Date().valueOf();

    if ( users.find( u=> u.email===user.email ) ){ return "this email is already registred" }

    else{

    delete user.passwordRepeat;
    user.token = auth.generateToken({email: user.email})
    users.push(user);
    user.success = true;
    return user;

    }
 }

exports.checkUser = (user) => { 

    const foundUser = users.find( u=> u.email===user.email )

    if( foundUser === undefined || foundUser.password!==user.password ){ return "wrong eamil or password" }
    
    return foundUser;

 }

