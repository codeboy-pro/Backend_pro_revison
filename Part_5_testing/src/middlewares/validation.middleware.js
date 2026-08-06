const {body,validationResult}=require("express-validator");

async function validateResult(req,res,next){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
errors:errors.array()
        })
    }
    next()
}

const registerUserValidationRules=[
    body("username")
    .isString()
    .withMessage("username must be string")
    .isLength({min:3,max:30})
    .withMessage("username must be at least 3-30 characters long"),

    body("email")
    .isEmail()
    .withMessage("email must be valid email address"),
    
    body("password")
    .isLength({min:6})
    .withMessage("password must be at least 6 characters long"),
    validateResult
]

module.exports={
    registerUserValidationRules
}

