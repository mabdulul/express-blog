var express = require("express");
var router = express.Router();
const AuthorModel = require("../models/authors_models");

router.get("/:post_id", async function(req, res, next) {
  const { post_id } = req.params;
  console.log(req.params);
  const postData = await AuthorModel.getPost(req.params, null, null);
  res.json(postData);
});

module.exports = router;
