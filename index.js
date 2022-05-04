const express = require("express");
const cors = require("cors");
require('dotenv').config();
const {MongoClient, ObjectId} = require("mongodb")
const ejs = require("ejs")


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

  // // MONGODB CONNECTION
const client = new MongoClient(process.env.DB_URL)
// client
//   .connect()
//   .then(async () => {
//     // Make the server listen on a port (on our computer)
//     server.listen(PORT, () => {
//       console.log("Server listening...");
//     });

//     const db = client.db("express-demo");
//     const students = db.collection("searchedMovies");

//     students.insertOne({
//       kajdkjakd: "kdjkajdkjakd",
//       kajdkjakdj: 290,
//       kjakdjkajkdj: "kdjfjheurhjbvnbd",
//     });

//     const allStudents = await students.find().toArray();
//     console.table(allStudents);

//     const detroitBoys = await students
//       .find({ city: "Detroit", interests: "bananas" })
//       .toArray();
//     console.table(detroitBoys);

//     await students.deleteOne({ _id: ObjectId("627052a04eb2229bb037074f") });

//     await students.updateOne(
//       { _id: ObjectId("627052b51845ebba7f561dc5") },
//       {
//         $set: {
//           city: "Boston",
//           interests: ["tacos", "bananas"],
//         },
//       }
//     );

//     const newStudents = await students.find().toArray();
//     console.table(newStudents);

//     // const alotOfStudents = [
//     //   {
//     //     name: "Dao",
//     //     interests: ["tacos"],
//     //     city: "Sac Town",
//     //   },
//     //   {
//     //     name: "Nikko",
//     //     interests: ["bananas"],
//     //     city: "Detroit",
//     //   },
//     //   {
//     //     name: "Will",
//     //     interests: ["camarro", "frontier", "wrangler", "bananas"],
//     //     city: "Detroit",
//     //   },
//     //   {
//     //     name: "Mannie",
//     //     interests: ["soccer", "bananas"],
//     //     city: "Georgia",
//     //   },
//     // ];

//     // students.insertMany(alotOfStudents);

//   })
//   .catch((error) => {
//     console.log(error);
//   });