const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    status:{type:Boolean,required:true,default:false},
    
    // posts:[
    //     {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"post"
    //     }
    // ]
})

const Task = mongoose.model("user",taskSchema)

module.exports = Task;