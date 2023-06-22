const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")
const nodemailer = require("nodemailer")
const { cloudinary } = require('../utils/cloudinary');
const { upload } = require("../utils/multer");
const multer = require('multer');

const userPic = asyncHandler(async(req,res)=>{
   
exports.uploadImage = catchAsync(async (req, res, next) => {

    let cloudinaryResponse;

    if (req.file) {
        cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, function(err,result){
            return true
        } ); } 
        
        else {
        return next(new AppError('Please provide a file', 400));
    }

    res.status(200).json({
        status: 'success',
        data: {
            imageUrl: cloudinaryResponse?.url,
        },
    });
});


})

const followUser = asyncHandler(async(req,res)=>{
    currentUser = req.user.id
    const id = req.params.userid
     const user = User.findOne({_id:id})
     if(currentUser == user._id){
        res.status(400).json({message:"You can't follow yourselves"})
     }

})



module.exports={userPic,followUser}