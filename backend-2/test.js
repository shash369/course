const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    res.send("hello how are you doing");
})

app.listen(3000,()=>{
    console.log("connected"); 
})