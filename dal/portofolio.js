const Portofolio = require('../models/portofolio');


//create new porto
module.exports.create = async function(data){
   
    let portofolio = new Portofolio(data);
    await portofolio.save();

};

//get porto by Id 



   
  /**
 * get a porto by id from db .
 */
module.exports.getPorto = async function (_id) {
    let portofolio = await Portofolio.findById(_id)
                           .populate('managedBy','name')
                           .select('-__v');
    return portofolio;
  }
  /**
 * Fetch portos
 */

  module.exports.getAll = async function (){
   let portofolio = await Portofolio.find()
                      .populate('managedBy','name')
                      .sort('-createdAt')//Sort by Date Added 
                      .limit(10)
                        
   return portofolio;   
}
  /**
   * Update a porto
   */
  module.exports.update = async function(query, data) {
    let portofolio = await Portofolio.findByIdAndUpdate(query, data,{new: true});
    return portofolio;
    
  }

    /**
   * Delete a porto
   */
  module.exports.deleteById = async function(id) {
    console.log(id)
    let portofolio = await Portofolio.findOneAndRemove(id);
    return portofolio;
  }





//get al porto


// update porto

// delete porto 