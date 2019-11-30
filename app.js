const express = require("express"),
  path = require("path"),
  es6Renderer = require("express-es6-template-engine"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();

app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
