const express = require("express");
const mongoose = require("mongoose")
const Task = require("./schema/task.schema")

const PORT = 8000;
const DB_URL = "mongodb+srv://soumyak:Soumyak_2001@cluster0.xrjzi.mongodb.net/evaluation?retryWrites=true&w=majority"


const app = express();
app.use(express.json())
const connect = ()=>{
    return mongoose.connect(DB_URL)
}

app.get("/tasks",async (req,res)=>{
    try{
        let users = await Task.find({})
        res.status(200).json(users)
    }catch(err){
        res.send(400).send(`${err.message} 404 NOT FOUND`)
    }
})

app.get("/tasks/:id",async (req,res)=>{
    try{
        let users = await Task.findById(req.params.id)
        res.status(200).json(users)
    }catch(err){
        res.send(400).send(`${err.message} 404 NOT FOUND`)
    }
})

app.patch("/tasks/:id",async (req,res)=>{
    try{
        let users = await Task.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        })
        res.status(200).json(users)
    }catch(err){
        res.send(400).send(`${err.message} 404 NOT PATCH`)
    }
})

app.listen(PORT,async ()=>{
    try{
    await connect()
    console.log(`${PORT}`);
    }catch(err){
        console.log(err.message);
    }
})