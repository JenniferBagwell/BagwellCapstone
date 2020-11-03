const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const pool = require("./db");

mongoose.connect("mongodb://localhost/test");

app.use(cors());
app.use(express.json());

app.route("/api/getPosts").get((req, res) => {
  pool.query("SELECT * FROM public.post", (err, posts) => {
    console.log(posts);
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).send({ posts: posts.rows });
    }
  });
});

app.listen(8675, () => console.log("Listening on port 8675"));
