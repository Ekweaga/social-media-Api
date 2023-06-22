const express = require('express')
const router = express.Router()
const {postComment,deleteComment,updateComment} = require("../../controllers/comment")
const {validateToken} = require("../../controllers/verifyUser/index")

router.post("/create",validateToken,postComment)
// user can only delete his/her post
/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         
 *         - comment
 *       properties:
 *         
 *        
 *         comment:
 *           type: string
 *           description: Users comment on a post
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         
 *        
 *         comment: This is a comment on a post
 *        
 */


/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Comment
 * /comment/create:
 *   post:
 *     summary: Post a comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: New user created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Delete a comment
 * /comment/delete/{commentId}:
 *   post:
 *     summary: Delete a comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Comment deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Like a comment
 * /comment/likecomment/{commentId}:
 *   post:
 *     summary: Like a comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Liked comment.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: Comment
 *   description: Update a comment
 * /comment/updatecomment/{commentId}:
 *   post:
 *     summary: Update a comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Comment updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 *
 */

router.post("/delete/:id",validateToken,deleteComment)
router.post("/updatecomment/:id",validateToken,updateComment)
router.post("/likecomment/:id",validateToken,deleteComment)




module.exports = router