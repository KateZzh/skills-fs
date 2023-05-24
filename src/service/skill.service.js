const fs = require("fs");
const path = "./storage/storage.json";

function getAllSkill() {
  const data = JSON.parse(fs.readFileSync(path));
  if (!data.length) throw new Error("empty");

  return data;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));

  const bool = data.every((el) => el.title != title);
  if (!bool) throw new Error("such title already exists");

  const item = { id: +data.length + 1, title };
  data.push(item);

  fs.writeFileSync(path, JSON.stringify(data));
  
  return data;
}

module.exports = { getAllSkill, createSkill };
