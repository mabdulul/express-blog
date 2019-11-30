var express = require("express");
var router = express.Router();
const AuthorModel = require("../models/authors_models");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const authorsData = await AuthorModel.getAuthors();
  res.json(authorsData);
});

router.get("/post/:post_id", async function(req, res, next) {
  const { post_id } = req.params;
  console.log(req.params);
  const postData = await AuthorModel.getPost(post_id, null, null);
  res.json(postData);
});

router.post("/form", async (req, res) => {
  const { id, name, email } = req.body;
  console.log(req.body);
  const response = await AuthorModel.addEntry(id, name, email);
  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send(`Could not add new blog post ${title}`).status(409);
  }
});

module.exports = router;
