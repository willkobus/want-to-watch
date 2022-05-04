const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const commentRouter = express.Router();
commentRouter.use(express.json());
commentRouter.use(express.urlencoded())

commentRouter.put("/:id", async(req, res) => {
    const {id} = req.params
    const {comment} = req.body

    try {
        const movie = await Movie.findByIdAndUpdate(id);
        const newComment = comment
        movie.comments.push(newComment);
        await movie.save();
        console.log(movie)

        res.redirect(303, "/getMovie?title=" + movie.title)
    } catch (error) {
        console.log(error)
    }

    

})

module.exports = {
    commentRouter
}