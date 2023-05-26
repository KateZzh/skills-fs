function isValidSkillId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error('id is not a number');
  if (id < 0) throw new Error('id is less than zero');
  next();
}

function isValidSkillBody(req, res, next) {
  const { title } = req.body;

  if (!title) throw new Error('title is empty');
  if (!isNaN(title)) throw new Error('incorrect title');

  next();
}

module.exports = { isValidSkillId, isValidSkillBody };
