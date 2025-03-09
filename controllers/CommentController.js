const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    //fetch the data from request body
    const { post, user, body } = req.body;
    //create a comment object
    const comment = new Comment({ post, user, body });
    //using save method to save the comment in database
    const savedComment = await comment.save(); //after saving the comment in database, we will return the saved comment object

    // here we first find the postId and then using $push operator we will add the commentId to the post and
    // then by using {new:true} we will return the post object with the new comment.
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments") //populate the comments array with comment documents
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while creating a comment",
      message: err.message,
    });
  }
};
