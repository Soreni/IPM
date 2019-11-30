const User = require('../dal/user');
const validate = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require("lodash");



module.exports.createUser = async function(req,res){
     const body = req.body;
     const {error}= validate(body);
     if(error) return res.status(404).send(error.details[0].message);
     let user = await User.get({email: body.email});
     if(user) return res.status(400).send(`${body.email} is already registered`);
     const salt = await bcrypt.genSalt(10);
     body.password = await bcrypt.hash(body.password, salt);
     user = await User.create(body);
     const token = user.generateAuthToken();
    res.header('x-auth-token',token).status(200).send(_.pick(user,['_id','name','email']));

};


exports.getUserById = async (req, res)=> {
    
     const user = await User.getUser(req.params.id);
     if (!user) return res.status(404).send("The User is not found!!!");
     res.status(200).send(_.pick(user,['_id','name','email']));

     
};


// Get all of Users
exports.getAll = async (req, res)=> {

let user = await User.getAll();
res.status(200).send(user);

}
/**
* Update a User 
* 
* 
*/
exports.updateUser = async (req, res)=> {
  const body  = req.body; 
  const {error}= validate(body);
  if(error) return res.status(404).send(error.details[0].message);

   let user = await  User.update({ _id: req.params.id }, body);
 
   res.status(200).send(_.pick(user,['_id','email','phoneNumber']));

};

exports.deleteUser = async (req, res)=>  {    

     let user = await  User.deleteById(req.params.id);
     res.status(200).send(_.pick(user,['_id','email','name']));
 

};