const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.status(200).json({
      success: true,
      data: savedPost,
      message: "Post created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while creating post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("comments").exec();

    res.status(200).json({
      success: true,
      data: posts,
      message: "Post fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while fetching all post",
    });
  }
};
