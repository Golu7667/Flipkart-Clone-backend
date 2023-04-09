const express=require("express");
const env=require("dotenv");
const app=express();
const mongoose=require("mongoose");
const categoryRoutes=require("./routes/category")
const path=require('path');
const cors =require('cors');


env.config();
// routes file
const userRoutes=require("./routes/auth");
const adminRoutes=require("./routes/admin/auth");
const productRoutes=require("./routes/product");
const cartRoutes=require("./routes/cart");
const initialDataRoutes=require("./routes/admin/initialData")


//DB connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    retryWrites: true,
    w: 'majority'
   
   
   }).then(()=>{
    console.log("mogoose connected");
   }).catch(err => {
    console.error(err);
  });
 
app.use(cors());
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));
app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRoutes);




//server
app.listen(process.env.PORT,()=>{
    console.log("server connected")
})