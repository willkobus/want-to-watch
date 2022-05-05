const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const getMovieRouter = express.Router();
getMovieRouter.use(express.json());

getMovieRouter.get("/", async (req, res) => {
    const {title} = req.query

    if(title){
        const movie = await Movie.findOne({title: title.toLowerCase()})
        console.log(movie);
        res.render("review", {movie})
    }
})

module.exports = {
    getMovieRouter
}