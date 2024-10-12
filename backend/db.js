const mongoose = require("mongoose"); 
require('dotenv').config();

const  MONGO=process.env.MONGOURL;

mongoose.connect(MONGO);

const todoSchema=new mongoose.Schema({
    title:{
    type:String,
    required:true,
    unique:true,
   },
   desc:{
    type:String,
    required:true,
    minLength:10,
   }
})

const Todo=new mongoose.model('todos',todoSchema);

module.exports={
    Todo
};
