const express = require("express");
// Import the express router
const router = express.Router();

// Import the handler functions from controllers
// const { dummy } = require("../controllers/LikeController");
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");
const { likePost, unlikePost } = require("../controllers/LikeController");

// Define the routes and the handler functions
// router.get("/dummyroute", dummy);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// Export the router
module.exports = router;
