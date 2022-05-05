const express = require("express");
const axios = require("axios");
const Movie = require("../Models/movie");
const deleteRouter = express.Router();
deleteRouter.use(express.json());
deleteRouter.use(express.urlencoded())


deleteRouter.delete("/:id", async(req, res) => {
    const {id} = req.params
    

    try {
        await Movie.findByIdAndDelete(id);

        res.redirect(303, "/")
    } catch (error) {
        console.log(error)
    }

})

module.exports = {
    deleteRouter
}