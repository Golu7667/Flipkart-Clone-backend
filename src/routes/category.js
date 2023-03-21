const express=require('express');
const category = require('../models/category');
const {requireSignin, adminMiddleware}=require('../common-middleware');
const router=express.Router();
const multer=require('multer');
const { addCategory, getCategories } = require('../controller/category');
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
router.post('/category/create',requireSignin,adminMiddleware,upload.single('categoryImage'),addCategory);
router.get('/category/getcategory',getCategories);

module.exports=router;