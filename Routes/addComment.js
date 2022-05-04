const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const commentRouter = express.Router();
commentRouter.use(express.json());

commentRouter.put("/:id", async(req, res) => {
    const {id} = req.params
    const {comment} = req.body

    const doc = await Movie.findById(id);
    doc.comments = doc.comments.push(comment);
    await doc.save();

    
})

module.exports = {
    commentRouter
}