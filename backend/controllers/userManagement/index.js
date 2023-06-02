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
        cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
            upload_preset: 'trials',
        });
    } else {
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



module.exports={userPic}