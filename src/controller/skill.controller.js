const express = require("express");
const { getAllSkill, createSkill } = require("../service/skill.service");

const route = express.Router();

route.get("/", (req, res) => {
  try {
    const data = getAllSkill();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/", (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);
    
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;
