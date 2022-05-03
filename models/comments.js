const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let movie = new Schema({
  title: String,
  movieDate: Number,
  synopsis: String,
  poster: String,
  //string must be parsed as a number? maybe? 
  likes: Number, 
  dislikes: Number,
  comments: [String]
});

var movieSchema = mongoose.model('movie', movie );

// module.exports = {
//     movie
// }