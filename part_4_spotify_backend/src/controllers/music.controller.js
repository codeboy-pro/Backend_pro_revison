const  jwt= require('jsonwebtoken');
const musicModel=require('../models/music.model');
const {uploadFileToImageKit}=require('../services/storage.service');

async function createMusic(req,res){
console.log(req.headers["content-type"]);
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       if (decoded.role !== "artist") {
         return res.status(403).json({
           message: "You don't  have access to create a music",
         });
       }
          const { title } = req.body;
          const file = req.file;
        
          const uploadResult = await uploadFileToImageKit(file.buffer.toString('base64'));
          const music = await musicModel.create({
            uri: uploadResult.url,
            title,
            artist: decoded.id,
          });
          res.status(201).json({
            message: "Music created successfully",
            music: {
              id: music._id,
              uri: music.uri,
              title: music.title,
              artist: music.artist,
            },
          });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = { createMusic };