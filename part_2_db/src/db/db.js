const mongoose=require("mongoose");



async function connectDB(){
    await mongoose.connect(
      "mongodb+srv://Back:jR8KKwR34o1ogfqk@cluster0.hlwlamf.mongodb.net/home",
    );
    console.log("Connected to DB");
    

}

module.exports=connectDB;