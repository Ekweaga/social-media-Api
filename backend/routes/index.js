const express = require('express')
const router = express.Router()
const {login,signup,generateOTP,localVariables,confirmOTP} = require("../controllers/authentication/")
const validateToken = require("../controllers/validateToken")
const {userPic} = require("../controllers/userManagement")



router.post("/signup",signup)

router.post("/login",login)

router.post("/authme", validateToken,(req,res)=>{

})



router.post("/generateOTp",localVariables,generateOTP)


router.post("verifyOTP",localVariables,confirmOTP)

router.post("/resetpassword",(req,res)=>{

})

// user management routes

// edit, update and post user profile pic

router.post("/userPic",upload.single('image'),userPic)


module.exports = router