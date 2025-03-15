const userService = require('./user.service');

const register = async (req, res) => {
  const user  = req.body;
  const result = await userService.register(user);
  res.status(result.status).json(result);
};

const findAll = async (req, res) => {
  const result = await userService.findAll();
  res.status(result.status).json(result);
};

module.exports = {
  register,
  findAll
}
