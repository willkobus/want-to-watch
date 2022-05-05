const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const movieRouter = express.Router();
movieRouter.use(express.json());
// /api
movieRouter.post("/", async (req, res) => {
  const { title, genre } = req.body;

  const titleQuery = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${title}`;

  const genreQuery = `//https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate%27&with_genres=${genre}`;

  let movie;
  if (title) {
    try {
      const { data } = await axios.get(titleQuery);
      movie = {
        title: data.results[0].title.toLowerCase(),
        movieDate: data.results[0].release_date,
        poster: data.results[0].backdrop_path,
        synopsis: data.results[0].overview,
        
        likes: data.results[0].vote_average,
        totalVotes: data.results[0].vote_count
      };
    } catch (error) {
      // \hey uyou may have already added that movie
      
    }
  }
  if (genre) {
    try {
      const { data } = await axios.get(genreQuery);
      movie = {
        title: data.results[0].title,
        movieDate: data.results[0].release_date,
        poster: data.results[0].backdrop_path,
        synopsis: data.results[0].overview,
        likes: data.results[0].vote_average,
        // totalVotes: data.results[0].vote_count
      };
    } catch (error) {
      console.log(error);
    }
  }

  try {
    let newMovie = new Movie({ ...movie });
    newMovie = await newMovie.save();
    return res.render("review", { movie: newMovie });

  } catch (error) {
    res.render("error-page", { error: "The Movie you are trying to create already exists. Head back to the home page to check it out or make a new one!" });
   
  }

});



module.exports = {
  movieRouter
};
