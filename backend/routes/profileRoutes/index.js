const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")
const nodemailer = require("nodemailer")
const router = express.Router()
const {validateToken} = require("../../controllers/verifyUser/index")



// delete account
router.post("deleteAccount",validateToken,(req,res)=>{

})
//follow user
router.post("follow",validateToken,(req,res)=>{
    
})
// upload image
router.post("uploadImage",validateToken,(req,res)=>{
    
})
// numbers of followers

router.get("followers",validateToken,(req,res)=>{
    
})
// numbers followers user following

router.get("following",validateToken,(req,res)=>{
    
})

module.exports=router
