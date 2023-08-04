const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: true,
      maxlength: 50000,
    },
    author: {
      type: String,
      required: true,
      maxlength: 200,
    },
    category: {
      type: String,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
