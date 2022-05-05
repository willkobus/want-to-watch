const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const getMovieRouter = express.Router();
getMovieRouter.use(express.json());

getMovieRouter.get("/", async (req, res) => {
    const {title} = req.query

    try {
        if(title){
            const movie = await Movie.findOne({title: title.toLowerCase()})
            if(movie !== null){
            console.log(movie);
            return res.render("review", {movie})
            }
            else{
                res.render("no-review-error-page", { error: "The Movie you are trying to access has not yet been reviewed. Head back to the home page to be the first to review it!" });
            }
        }  
    } catch (error) {
        console.log(error)
    }

})

module.exports = {
    getMovieRouter
}