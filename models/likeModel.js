//import mongoose
const mongoose = require("mongoose");

//router handler
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId, // fetch the id of the post that was liked
    ref: "Post", //reference to the post model
  },
  user: {
    type: String,
    required: true,
  },
});

//export
module.exports = mongoose.model("Like", likeSchema);
