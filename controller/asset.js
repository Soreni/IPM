const Asset = require('../dal/asset');
const validate = require('../models/asset');




module.exports.createAsset = async function(req,res){
     const body  = req.body; 
     const {error}= validate(body);
    if(error) return res.status(404).send(error.details[0].message);
    await Asset.create(body);
    res.status(200).send("Successfully  Registered!");

}


exports.getAssetById = async (req, res)=> {
    
     const asset = await Asset.getAsset(req.params.id);
     if (!asset) return res.status(404).send("The Asset is not found!!!");
     res.status(200).send(asset);

     
};


// Get all of Assets
exports.getAll = async (req, res)=> {

let asset = await Asset.getAll();
res.status(200).send(asset);
};
/**
* Update a Asset 
* 
* 
*/
exports.updateAsset = async (req, res)=> {
  const body  = req.body; 
  const {error}= validate(body);
  if(error) return res.status(404).send(error.details[0].message);

   let asset = await  Asset.update({ _id: req.params.id }, body);
 
   res.status(200).send(asset);

};

exports.deleteAsset = async (req, res)=>  {    

     let asset = await  Asset.deleteById(req.params.id);
     res.status(200).send(asset);
 

};