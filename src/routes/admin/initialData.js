const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const { intialData } = require("../../controller/admin/initialData");


router.get('/initialData',intialData);


module.exports = router;