const mongoose = require('mongoose');
const Joi = require('joi');


const assetSchema = new mongoose.Schema({

    assetType: {
        type:String,
        enum:['tangible','intangible'],
        default: 'tangible',
        required:true,  
        minlength: 6,
        maxlength: 50, 
    },
    propertyName: {
        type:String, //vehicle, building , patent right
        required:true,
        minlength: 3,
        maxlength: 50,    
    },
    usage: {
        type:String,
        enum:['operating','non-operating'],
        default: 'operating',
        minlength: 6,
        maxlength: 50,   
    },
    status: {
        type:String,
        enum:['functional','non-functional'],
        default: 'functional',
        minlength: 6,
        maxlength: 50,    
    }
},{timestamps:true});
const Asset = mongoose.model('Asset',assetSchema);

const validateAsset = function(asset){

    const schema = {
        assetType: Joi.string().min(6).max(50).required(),
        propertyName: Joi.string().min(3).max(50).required(),
        usage: Joi.string().min(6).max(50).required(),
        status: Joi.string().min(6).max(50).required(),
    }
    return Joi.validate(asset,schema);
}

module.exports = Asset;
module.exports.validate = validateAsset;
