
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    username:{
        type:String,
        unique:[true,"Please provide unique username"],
        required:true
      

    }
,

    email:{
        type:String,
        unique:[true,"Email must be unique"],
        required:true
        
        
    },
password:{
        type:String,
        required:true
        
      
        
    },

    userImage:{
        type:String
    },

    followers:{
        type:[String],
        default:[]
    },

    following:{
        type:[String],
        default:[]
    }
   
   
})



module.exports =  mongoose.models.User || mongoose.model("User",UserSchema)