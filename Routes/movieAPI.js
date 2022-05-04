const express = require("express");

const axios = require("axios");

const Movie = require("../Models/searchedMovie")

const movieRouter = express.Router();

movieRouter.post("/",async, (req,res)=>{
  const {search} = req.query;

  const titleQuery = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${titleSearch}`;

  const genreQuery = `//https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate%27&with_genres=${genreSearch}`
  
if(title){
  const { data } = await axios.get(titleQuery)
  const name = data.results[0].title;
  const date = data.results[0].release_date
  const img = data.results[0].backdrop_path
  const desc = data.results[0].overview
}
  if(genre){
    const { data } = await axios.get(genreQuery)
    const name = data.results[0].title;
    const date = data.results[0].release_date
    const img = data.results[0].backdrop_path
    const desc = data.results[0].overview
  }


  // return results
  res.redirect(303,"/review")
})

// movieRouter.get("/", (req, res) =>{
//   res.render()
// })

module.export = {
  movieRouter
}
