const express=require('express');
const router=express.Router();
const userController=require('../controller/users_controller');
router.get('/sign-up',userController.signup);
router.get('/sign-in',userController.signin);

router.post('/create',userController.create);
router.get('/profile',userController.profile);
router.post('/create-session',userController.createsession);
router.get('/sign-out',userController.signout);
router.get('/delete-account',userController.deleteAccount);







module.exports=router;