const express=require('express');
const authcontroller=require('../controllers/auth.controller');

const router=express.Router();


router.post('/register',authcontroller.registerUser)

//test cookies
// router.get('/test',(req,res)=>{
// console.log(req.cookies);
// res.status(200).json({
//     Cookies:req.cookies
// })
// })


module.exports=router;