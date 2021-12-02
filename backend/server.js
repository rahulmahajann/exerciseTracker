const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const userRouter = require('./routes/user');
const exerciseRouter = require('./routes/exercise');

const app = express();

const port = process.env.PORT||3001;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
});

app.use(bp.json());

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('db connected successfully');
});

app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);

app.listen(port,()=>{
    console.log(`server runnning on port ${port}`);
});