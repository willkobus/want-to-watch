const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const deleteCommentRouter = express.Router();
deleteCommentRouter.use(express.json());
deleteCommentRouter.use(express.urlencoded())


deleteCommentRouter.put("/:id", async(req, res) => {
    const {id} = req.params
    const {commentNumber} = req.body
    

    try {
        const movie = await Movie.findByIdAndUpdate(id);
        movie.comments.splice(commentNumber - 1, 1);
        await movie.save();
        console.log(movie)

        return res.redirect(303, "/getMovie?title=" + movie.title)
    } catch (error) {
        console.log(error)
    }

})

module.exports = {
    deleteCommentRouter
}