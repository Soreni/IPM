const express = require('express');
const router = express.Router();
const auth =require('../middleware/auth');
const authorize = require('../middleware/authorization');

const portofolioCotr = require('../controller/portofolio');


router.post("/",[auth,authorize],portofolioCotr.createPorto);
router.get("/search",portofolioCotr.getPortos);
router.get("/:id",portofolioCotr.getPortofolioById);
router.put("/:id",[auth,authorize],portofolioCotr.updatePortofolio);
router.delete("/:id",[auth,authorize],portofolioCotr.deletePortofolio);


module.exports = router;


