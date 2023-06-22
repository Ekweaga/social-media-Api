
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    userId:{
        type:String,
        unique:[true,"Please provide unique username"]
      

    }
,

   postTitle:{
    type:String
   }
,
postDesc:{
    type:String
},
    likes:{
        type:[String],
        default:[]
    },
    postImage:{
            type:String
    },

    dislikes:{
        type:[String],
        default:[]
    }
   ,
   comments:{
    type:[String],
    default:[]
   }
   
})



module.exports =  mongoose.models.Post || mongoose.model("Post",UserSchema)