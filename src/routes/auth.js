const express = require("express");
const {signup,signin, requireSignin}  = require("../controller/auth");
const router = express.Router();
const User = require("../models/user");
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/auth");

router.post('/user/signup',validateSignupRequest ,isRequestValidated,signup);
router.post('/user/signin',validateSigninRequest,isRequestValidated, signin);


module.exports = router;