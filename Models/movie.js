const mongoose = require("mongoose");


const Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: { type: String, unique: true },
  movieDate: String,
  synopsis: String,
  poster: String,
  likes: Number,
  totalVotes: Number,
  comments: [String],
});

module.exports = mongoose.model("movie", movieSchema);
