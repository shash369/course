const express=require('express');
const app=express();
const {createTodo,updateTodo}=require('./types');

const port =5500;
app.use(express.json());
// body{
//     title:string,
//     descrption:string
// }
app.post('/todo',(req,res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you are sending a wrong input"
        })
        return;
    }
    
})

app.get('/todos',(req,res)=>{
    

})

app.put('/complete',(req,res)=>{
    const updatePayload=req.body;
    parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you are sending a wrong input"
        })
        return;
    }


})


app.listen(port,()=>{
    console.log("backend is connected at "+`${port}`);
})