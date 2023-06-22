const asyncHandler = require("express-async-handler")

const Comment = require("../../models/commentSchema")
const nodemailer = require("nodemailer")
const Post = require("../../models/postSchema")


const postComment = asyncHandler(async(req,res)=>{
    const {comment} = req.body
    const {id} = req.user
    const{postId} = req.params.id


    const commentPost = Comment.create({

        postId:postId,
        comment:comment,
        userId:id


    })
    if(commentPost){
        commentPost.save()
        const updatePost = Post.updateOne({_id:postId},{$push:{comment:comment}})
    updatePost.save();
        return res.status(201).json({comment:"Comment message sent"})
    }

   

   
})

const deleteComment = asyncHandler((req,res)=>{

})

const updateComment = asyncHandler((req,res)=>{
    
})

module.exports = {postComment,deleteComment,updateComment}