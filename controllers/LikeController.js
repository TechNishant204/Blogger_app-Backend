const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//Like a Post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    //update the post collection basis on the like
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();
    res.status(201).json({
      success: true,
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while like a post",
    });
  }
};

//UnLike a Post
exports.unlikePost = async (req, res) => {
  try {
    //unlike by deleting the like in the like collection & in the post collection using given id
    const { post, like } = req.body;
    //find and delete the like collection me se
    const deletedLike = await Like.findOneAndDelete({
      post: post,
      _id: like,
    });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deletedLike._id },
      },
      { new: true }
    );
    res.status(201).json({
      success: true,
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in unlike the post",
    });
  }
};
