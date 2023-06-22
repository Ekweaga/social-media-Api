const express = require('express')
const router = express.Router()
const {login,signup,generateOTP,localVariables,confirmOTP} = require("../../controllers/authentication/index")
const {validateToken} = require("../../controllers/verifyUser/index")
//const {userPic} = require("../controllers/userManagement")



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         
 *         username:
 *           type: string
 *           description: User name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: 
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         
 *         username: Charles
 *         email: hikay133@gmail.com
 *         password: xxxxxxx
 *        
 */


/**
 * @swagger
 * tags:
 *   name: User
 *   description: Authentication
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: New user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */


/**
 * @swagger
 * tags:
 *   name: User
 *   description: login user
 * /auth/login:
 *   post:
 *     summary: login a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: You are logged in.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Get user details
 * /auth/authme:
 *   post:
 *     summary: Getting user details
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: New user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */








router.post("/signup",signup)

router.post("/login",login)

router.post("/authme", validateToken,(req,res)=>{

})



router.post("/generateOTp",localVariables,generateOTP)


router.post("verifyOTP",localVariables,confirmOTP)

router.post("/resetpassword",(req,res)=>{

})




module.exports = router