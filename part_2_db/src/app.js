const express=require("express");
const app=express();
const noteModel=require("./models/note.model");
app.use(express.json())

app.post("/notes",(req,res)=>{
    const data=req.body;
    noteModel.create({
        title:data.title,
        description:data.description
    });

    res.status(201).json({
        message:"Note added successfully"

    })
})

//find=>[{},{}] or []
//findOne=>{} or null
app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
   const id=req.params.id;
   await noteModel.findByIdAndDelete({
    _id:id
});
   res.status(200).json({
       message:"Note deleted successfully"
   })
});

app.patch("/notes/:id",async(req,res)=>{
  const id=req.params.id;
  const description=req.body.description;

  await noteModel.findByIdAndUpdate({_id:id},{description:description})
  res.status(200).json({
    message:"Note updated successfully"
  })
})

module.exports=app;