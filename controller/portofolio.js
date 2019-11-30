const Portofolio = require('../dal/portofolio');
const validate = require('../models/portofolio');





module.exports.createPorto = async function(req,res){
     const body  = req.body; 
     const {error}= validate(body);
     if(error) return res.status(404).send(error.details[0].message);
    await Portofolio.create(body);
    res.status(200).send("Successfully  Registered!");

}


exports.getPortofolioById = async (req, res)=> {
    
     const portofolio = await Portofolio.getPorto(req.params.id);
     if (!portofolio) return res.status(404).send("The Portofolio is not found!!!");
     res.status(200).send(portofolio);

     
};


// Get all of Portofolios
exports.getPortos= async (req, res)=> {

let portofolio = await Portofolio.getAll();
res.status(200).send(portofolio);

}
/**
* Update a Portofolio 
* 
* 
*/
exports.updatePortofolio = async (req, res)=> {
  const body  = req.body; 
  const {error}= validate(body);
  if(error) return res.status(404).send(error.details[0].message);

   let portofolio = await  Portofolio.update({ _id: req.params.id }, body);
 
   res.status(200).send(portofolio);
};

exports.deletePortofolio = async (req, res)=>  {    

     let portofolio = await  Portofolio.deleteById(req.params.id);
     res.status(200).send(portofolio);
 

};