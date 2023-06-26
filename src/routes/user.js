const express = require('express');
const {login, register} = require('../controllers/users');


const loginRouter = express.Router();
const registerRouter = express.Router();

// middleware that is specific to this router
loginRouter.use(express.json());
registerRouter.use(express.json());



loginRouter.post('/', login);

registerRouter.post('/', register);

module.exports = {loginRouter, registerRouter};