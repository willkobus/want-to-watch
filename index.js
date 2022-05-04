const express = require("express");
const cors = require("cors");
require('dotenv').config();
const goos = require("mongoose")
const ejs = require("ejs")
const {movieRouter} = require("./Routes/movieAPI")

const connect = async () => { await goos.connect(process.env.DB_URL, { useNewUrlParser: true })}

const server = express();

server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.set("views", "./Views")
server.set("view engine", "ejs")

const PORT = process.env.PORT || 3000;

connect()
.then( () => {
    server.listen(PORT, () => {
    console.log("Server Listening...");
  });
  server.use("/api", movieRouter)

  server.get("/", (req, res) => {
      res.render("index");
  });
})
.catch( (error) => {console.log(error)})




// server.get("/review", (req, res) => {
//     res.render("review")
// })
