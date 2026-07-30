const express = require("express");
const multer = require("multer");
const app = express();
const uploadFile = require("./services/storage.service");
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });
const postModel = require("./models/post.model");
const cors=require("cors");
app.use(cors());
app.post("/create-post", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  // console.log(result);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  return res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

module.exports = app;
