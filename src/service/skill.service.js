const fs = require('fs');
const path = './storage/storage.json';

function getAllSkill() {
  const data = JSON.parse(fs.readFileSync(path));
  if (!data.length) throw new Error('empty');

  return data;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));

  const bool = data.every(el => el.title != title);
  if (!bool) throw new Error('such title already exists');

  const item = { id: +data.length + 1, title };

  data.push(item);

  fs.writeFileSync(path, JSON.stringify(data));

  return data;
}

function deleteSkill(id) {
  const data = JSON.parse(fs.readFileSync(path));

  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('such id not found');

  fs.writeFileSync(path, JSON.stringify(filtered));

  return filtered;
}

function updateSkill(id, title) {
  const data = JSON.parse(fs.readFileSync(path));

  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('such id not found');

  const item = { id: +id, title };

  filtered.push(item);

  fs.writeFileSync(path, JSON.stringify(filtered));

  return filtered;
}

function getSkillById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id == id);

  if (!filtered.length) throw new Error('such id not found');

  return filtered;
}

module.exports = { getAllSkill, createSkill, deleteSkill, updateSkill, getSkillById };
