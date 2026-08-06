const express=require("express");
const app=express();
const validationRules=require("./middlewares/validation.middleware");
app.use(express.json());
app.get(
    "/",(req,res)=>{
        res.status(500).json({
            message:"Hello world!",
        })
    }
)

app.post("/register",validationRules.registerUserValidationRules,(req,res)=>{
    const {username,email,password}=req.body;
    res.status(200).json({
        message:"User registered successfully",
        user:{
            username,
            email
        }
    })
})


module.exports=app;