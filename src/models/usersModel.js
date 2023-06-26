const auth = require('../middlewares/authentication');

let users = [];


exports.find = email => users.find( u=> u.email===email ) ;


exports.addUser = (user) => {
    
    user.id = new Date().valueOf();

    if ( exports.find(user.email) ){ return "this email is already registred" }

    else{

    delete user.passwordRepeat;
    user.token = auth.generateToken({email: user.email})
    users.push(user);

    return {...user , success:true};

    }
 }

exports.checkUser = (user) => { 

    const foundUser = exports.find(user.email);

    if( foundUser === undefined || foundUser.password!==user.password ){ return "wrong eamil or password" }
    
    return foundUser;

 }

 exports.find = (email)=>{
    
    return users.find( u=> u.email===email );

 }

