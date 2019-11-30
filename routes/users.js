const express = require('express');
const router = express.Router();
const auth =require('../middleware/auth')

const userCotr = require('../controller/user');



router.post("/",userCotr.createUser);
router.get("/search",userCotr.getAll);
router.get("/:id",userCotr.getUserById);
router.put("/:id",auth,userCotr.updateUser);
router.delete("/:",auth,userCotr.deleteUser);


module.exports = router;


