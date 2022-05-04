const express = require("express");
const cors = require("cors");
require('dotenv').config();
const {MongoClient, ObjectId} = require("mongodb")
const ejs = require("ejs")
const {movieRouter} = require("./Routes/movieAPI")

//const client = new MongoClient(process.env.DB_URL)
const server = express();

server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))
server.use(express.json())


server.set("views", "./Views")
server.set("view engine", "ejs")

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server Listening...");
});

server.get("/", (req, res) => {
    res.render("index");
  });

server.use("/", movieRouter)

// server.get("/review", (req, res) => {
//     res.render("review")
// })