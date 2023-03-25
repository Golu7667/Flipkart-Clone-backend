const express = require("express");

const {signup,signin,signout}  = require("../../controller/admin/auth");
const {requireSignin}=require("../../common-middleware/index")

const router = express.Router();
const User = require("../../models/user");
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/auth");

router.post('/admin/signup',validateSignupRequest,isRequestValidated, signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated, signin);
router.post('/admin/signout',requireSignin,signout)

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({user:'profile'})
// });
module.exports = router;