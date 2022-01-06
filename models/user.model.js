const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  birth: { type:Date },
  phone: { type: Number },
  name: { type: String, required: true },
  profileImg: { type: String, default: "https://i.imgur.com/yWHfhiG.png" },
  followers: [{ type: String }],
  following: [{ type: String }],
  savedPost: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

// acessar com celular e ou email 

module.exports = model("User", userSchema);
