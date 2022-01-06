const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema({
  usernameId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  like: { type: Number },
  postTime: { type: Date },
});

module.exports = model("Post", postSchema);
