const express = require('express');
const router = express.Router();

const authCtr = require('../controller/auth');



router.post("/",authCtr.createUser);



module.exports = router;