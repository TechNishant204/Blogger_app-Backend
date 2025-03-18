//import mongoose
const mongoose = require("mongoose");

//router handler
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId, // fetch the id of the user who liked the post
      ref: "Like", //reference to the likes model
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, // fetch the id of the user who commented on the post
      ref: "Comment", //reference to the comment model
    },
  ],
});

// export the model with the name "Post"
// This model will be used in the controllers
module.exports = mongoose.model("Post", postSchema);
