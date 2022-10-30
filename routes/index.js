// const db=require("db");
const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
 
router.get('/',homeController.home);
router.use('/users',require('./users'));




module.exports=router;