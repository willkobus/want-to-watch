const mongoose = require("mongoose");

// const movies = []
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: String,
  movieDate: String,
  synopsis: String,
  poster: String,
  //string must be parsed as a number? maybe?
  likes: Number,
  // dislikes: Number,
  comments: [String],
});

// module.exports = {
//     movies
// }
module.exports = mongoose.model("movie", movieSchema);
