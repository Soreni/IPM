const User = require('../models/user');


//create new user
module.exports.create = async function(data){
   
    let user = new User(data);
    return await user.save();

};

//get user by Id 


  /**
 * get a user with given phonNumber from db .
 */
module.exports.get = async function (email) {
    let user = await User.findOne(email);
    return user;
  }
   
  /**
 * get a user by id from db .
 */
module.exports.getUser = async function (_id) {
    let user = await User.findById(_id).select('-password');
    return user;
  }
  /**
 * Fetch users
 */
module.exports.getAll = async function() {
    let user = await User.find().select('-password')
                          .sort('-createdAt')//Sort by Date Added 
                          .limit(10);
    return user;
  }
  
  /**
   * Update a user
   */
  module.exports.update = async function(query, userData) {
    let user = await User.findByIdAndUpdate(query, userData,{new: true});
    return user;
    
  }

    /**
   * Delete a user
   */
  module.exports.deleteById = async function(id) {
    let user = await User.findOneAndRemove(id);
    return user;
  }





//get al user


// update user

// delete user 