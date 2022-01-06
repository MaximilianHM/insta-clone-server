const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  PostId: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  resposta: { type: String },
  like: { type: Number },
  commentTime: { type: Date },
});

module.exports = model("Comment", commentSchema);
