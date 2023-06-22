const express = require('express')
const router = express.Router()
const {createPost,deletePost,likePost,updatePost,getPostComments} = require("../../controllers/postContent")
const {validateToken} = require("../../controllers/verifyUser/index")

router.post("/create",validateToken,createPost)
// user can only delete his/her post


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - description
 *         
 *         
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         description:
 *           type: string
 *           description: User name of the user
 *         image:
 *           type: string
 *           description: 
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         description: This is my post
 *         image: post image
 *         
 *         
 */




/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post
 * /post/create:
 *   post:
 *     summary: Create a post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post
 * /post/delete/{postId}:
 *   post:
 *     summary: delete a post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 *
 */


/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post
 * /post/like/{postId}:
 *   post:
 *     summary: Like a post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post like increase.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 *
 */
/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Post
 * /post/update/{postId}:
 *   post:
 *     summary: Update a post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 *
 */

router.post("/delete/:id",validateToken,deletePost)
router.post("like/:postid",validateToken,likePost)
router.post("update/:postid",validateToken,updatePost)
router.post("postComments",validateToken,getPostComments)



module.exports = router