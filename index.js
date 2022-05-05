const express = require("express");
const cors = require("cors");
require('dotenv').config();
const goos = require("mongoose")
const ejs = require("ejs")
const methodOverride = require("method-override")

const {movieRouter} = require("./Routes/movieAPI")
const {commentRouter} = require("./Routes/addComment")
const {getMovieRouter} = require("./Routes/getMovie")
const {deleteRouter} = require("./Routes/deleteEntry")
const {deleteCommentRouter} = require("./Routes/deleteComment")
const {updateCommentRouter} = require("./Routes/updateComment")

const connect = async () => { await goos.connect(process.env.DB_URL, { useNewUrlParser: true })}

const server = express();

server.use(express.static("Public"))
server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(methodOverride("_method"))

server.set("views", "./Views")
server.set("view engine", "ejs")

const PORT = process.env.PORT || 3000;

connect()
.then( () => {
    server.listen(PORT, () => {
    console.log("Server Listening...");
  });
  server.use("/api", movieRouter)
  server.use("/comment", commentRouter)
  server.use("/getMovie", getMovieRouter)
  server.use("/delete", deleteRouter)
  server.use("/deleteComment", deleteCommentRouter)
  server.use("/updateComment", updateCommentRouter)

  server.get("/", (req, res) => {
      res.render("index");
  });
})
.catch( (error) => {console.log(error)})

