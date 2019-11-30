
const mongoose = require('mongoose');
const User = require('../models/user');




const portofolioSchema = new mongoose.Schema({

    type: {
        type:String, //program , sup-program, project
        required:true,
        minlength: 6,
        maxlength: 50, 
    },
    startDate: {
        type:Date,
        required:true
    
    },
    endDate: {
        type:Date,
    
    },
    status: {
        type:String,
        enum: ['ongoing', 'closed'],
        default:'ongoing',
        required:true,
        minlength: 6,
        maxlength: 50, 
    },
    managedBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: User
    },
    },{timestamps:true});


const Portofolio = mongoose.model('Portofolio',portofolioSchema);


const validatePortofolio = function(portofolio){

    const schema = {
        type: Joi.string().min(3).max(50).required(),
        status: Joi.string().min(6).max(50).required(),
        startDate: Joi.Date(),
        endDate: Joi.Date()
    }
    return Joi.validate(portofolio,schema);
}
module.exports = Portofolio;
module.exports.validate = validatePortofolio;
