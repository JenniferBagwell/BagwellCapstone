const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.route("/api/getPosts").get((req, res) => {
  pool.query("SELECT * FROM post", (err, post) => {
    console.log(posts);
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).send({ posts: posts.rows });
    }
  });
});

app.listen(8675, () => console.log("Listening on port 8675"));
