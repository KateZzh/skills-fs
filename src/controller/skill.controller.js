const express = require('express');
const { getAllSkill, createSkill, deleteSkill, updateSkill, getSkillById } = require('../service/skill.service');
const { isValidSkillId, isValidSkillBody } = require('../helper/validation');
const buildResponse = require('../helper/buildResponse');
const route = express.Router();

route.get('/', (req, res) => {
  try {
    const data = getAllSkill();

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidSkillBody, (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);

    buildResponse(res, 201, data);
  } catch (error) {
    buildResponse(res, 405, error.message);
  }
});

route.delete('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteSkill(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidSkillId, isValidSkillBody, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateSkill(id, title);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getSkillById(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
