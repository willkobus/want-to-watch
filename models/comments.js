const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let comments = new Schema({
  comments: [String],
  likes: Number,
  dislikes: Number
});

// var commentsSchema = mongoose.model('commentsSchema', comments );

module.exports = {
    comments
}