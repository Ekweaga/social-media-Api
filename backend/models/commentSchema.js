
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
 
    userId:{
        type:mongoose.Schema.ObjectId,
        unique:[true,"Please provide unique username"],
        required:true
      

    }
,

postId:{
    type:mongoose.Schema.ObjectId,
    unique:[true,"Please provide unique username"],
    required:true
  

}
,

comment:{
    type:String,
    required:true
}

    ,

    likes:{
        type:[String],
        default:[]
    },

    dislikes:{
        type:[String],
        default:[]
    }
   
   
})



module.exports =  mongoose.models.Comment || mongoose.model("Comment",CommentSchema)