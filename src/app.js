const express = require("express");
const bodyParser = require("body-parser");
const route = require("./controller/skill.controller");

const app = express();

app.use(bodyParser.json());
app.use("/skill", route);
app.use((error, req, res, next) => res.send(error.message));

module.exports = app;
