const mongoose= require('mongoose');

const schoolSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    }
    

},{
    timestamps:true
})


const school = mongoose.model('School',schoolSchema);

module.exports= school;