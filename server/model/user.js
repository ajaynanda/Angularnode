const mongoose = require("mongoose")
const Userschema = new  mongoose.Schema({
    Firstname:{
        type:String,
    },
    Lastname:{
        type:String,
    },
    Email:{
        type:String,
    },
    Password:{
        type:String,
    },
    dateofbirth:{
        type:String
    },
    Proffession:{
        type:String
    },
    Gender:{
        type:String
    }
},{timestamps:true})

const Userdb = mongoose.model("user",Userschema)
module.exports = Userdb