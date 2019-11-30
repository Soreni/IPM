const jwt = require('jsonwebtoken');
const User = require('../dal/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require("lodash");




module.exports.createUser = async function(req,res){
     const body = req.body;
     const {error}= validate(body);
     if(error) return res.status(404).send(error.details[0].message);
     let user = await User.get({email: body.email});
     if(!user) return res.status(400).send('Invalid email or password');
     const validPassword = await bcrypt.compare(body.password,user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password');
     user.verify= true;
     user.active = true;
     await User.update(user._id,user)
     const token = user.generateAuthToken();
    res.status(200).send(token);

}

function validate(user){
    const schema = {
        email: Joi.string().min(3).max(50).required().email(),
        password: Joi.string().min(6).max(50).required()
        }
        return Joi.validate(user,schema);
}