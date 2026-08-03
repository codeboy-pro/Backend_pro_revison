const cookieParser = require('cookie-parser');
const express=require('express');
const musicRoutes=require('./routes/music.routes');
const authRoutes=require('./routes/auth.routes');
const app=express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/music',musicRoutes);
module.exports=app;