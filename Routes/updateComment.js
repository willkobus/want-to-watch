const express = require("express");
const Movie = require("../Models/movie");
const updateCommentRouter = express.Router();
updateCommentRouter.use(express.json());



updateCommentRouter.put("/:id", async(req, res) => {
    const {id} = req.params
    const {commentNumber, comment} = req.body
    
    
    try {
        const movie = await Movie.findByIdAndUpdate(id);
        movie.comments.splice(commentNumber, 1, comment);
        await movie.save();
        console.log(movie)

        return res.redirect(303, "/getMovie?title=" + movie.title)
    } catch (error) {
        console.log(error)
    }
    

})

module.exports = {
    updateCommentRouter
}