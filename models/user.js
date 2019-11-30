const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('../config/config');



const userSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    
    },
    password: {
        type:String,
        required:true
    
    },
    verify: {
        type:Boolean,
        default : false
    },
    active: {
        type:Boolean,
        default: false
    },
    role:{
        type:String,
        enum:['manager', 'admin']
    } 
    },{timestamps:true});

    userSchema.methods.generateAuthToken = function(){
        return jwt.sign(
            { _id: this._id},
            config.JWT_KEY);
    };
const User = mongoose.model('User',userSchema);

function validateUser(user){
    const schema = {
        name : Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(50).required().email(),
        password: Joi.string().min(6).max(50).required(),
        verify: Joi.boolean().min(3).max(50).required(),
        role: Joi.string().min(6).max(50).required()
        }
        return Joi.validate(user,schema);
}

module.exports = User;
exports.validate = validateUser;