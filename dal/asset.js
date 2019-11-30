const Asset = require('../models/asset');


//create new user
module.exports.create = async function(data){
   
    let asset = new Asset(data);
    await asset.save();

};

//get user by Id 



   
  /**
 * get a user by id from db .
 */
module.exports.getAsset = async function (_id) {
    let asset = await Asset.findById(_id);
    return asset;
  }
  /**
 * Fetch users
 */
module.exports.getAll = async function() {
    let asset = await Asset.find()
                .sort('-createdAt')//Sort by Date Added 
                .limit(10);
    return asset;
  }
  
  /**
   * Update a user
   */
  module.exports.update = async function(query, data) {
    let asset = await Asset.findByIdAndUpdate(query, data,{new: true});
    return asset;
    
  }

    /**
   * Delete a user
   */
  module.exports.deleteById = async function(id) {
    let asset = await Asset.findOneAndRemove(id);
    return asset;
  }





