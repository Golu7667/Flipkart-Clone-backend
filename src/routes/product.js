const express=require('express');
const category = require('../models/category');
const {requireSignin, adminMiddleware}=require('../common-middleware');
const router=express.Router();
const multer=require('multer');
const Product=require('../models/product');
const { addCategory, getCategories } = require('../controller/category');
const { createProduct } = require('../controller/product');
const path=require('path');
const shortid=require('shortid');

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
})
const upload=multer({storage})

router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);
// router.get('/product/getproduct',getCategories);

module.exports=router;