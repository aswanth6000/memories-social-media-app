import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouts from './routes/post.js'

const app = express()

app.use('/posts',postRouts);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://aswanth:aswanth6000@cluster0.jo6ebxo.mongodb.net/?retryWrites=true&w=majority"
const PORT  = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedtopology:true})
.then(( )=>app.listen(PORT,()=>console.log("server running on port: 5000")))
.catch((err) =>console.log(err));