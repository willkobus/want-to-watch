const express = require("express");
const axios = require("axios");
const { movies } = require("../Models/movies")
const movieRouter = express.Router();
movieRouter.use(express.json());

movieRouter.post("/", async (req,res)=>{
  const {title, genre} = req.body;

  const titleQuery = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${title}`;

  const genreQuery = `//https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate%27&with_genres=${genre}`
  
let movie;
  if(title){
  const { data } = await axios.get(titleQuery).catch((error)=>{
    console.log(error)
  })
  movie = { 
    name: data.results[0].title,
   date: data.results[0].release_date,
   img: data.results[0].backdrop_path,
   desc: data.results[0].overview,
   rating: data.results[0].vote_average,
   totalVotes: data.results[0].vote_count
  }
}
  if(genre){
    const { data } = await axios.get(genreQuery).catch((error)=>{
      console.log(error)
    })
    movie = { 
    name: data.results[0].title,
    date: data.results[0].release_date,
    img: data.results[0].backdrop_path,
    desc: data.results[0].overview,
    rating: data.results[0].vote_average,
    totalVotes: data.results[0].vote_count
    }
    
  }
    res.render("review", {movie})
    movies.push(movie)
    // return movie
   console.log(movies);
  // res.redirect(303,"/review")
  
})

// movieRouter.get("/review", (req, res) => {
//   res.render("review", {movies});
// });

module.exports={
movieRouter
// , movie
}
