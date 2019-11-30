const express = require('express');
const router = express.Router();
const auth =require('../middleware/auth');
const authorize = require('../middleware/authorization');

const assetCotr = require('../controller/asset');


router.post("/",auth,assetCotr.createAsset);
router.get("/search",assetCotr.getAll);
router.get("/:id",assetCotr.getAssetById);
router.put("/:id",auth,assetCotr.updateAsset);
router.delete("/:id",auth,assetCotr.deleteAsset);


module.exports = router;


