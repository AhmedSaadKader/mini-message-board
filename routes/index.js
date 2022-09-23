var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
  // next();
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  let messageObj = { user: req.body.author, text: req.body.messages, added: new Date() };
  messages.push(messageObj);
  res.redirect("/");
});

module.exports = router;
