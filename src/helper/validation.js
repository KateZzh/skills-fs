function isValidSkillId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error("id is not a number");
  if (id < 0) throw new Error("id is less than zero");
  next();
}

module.exports = { isValidSkillId };
