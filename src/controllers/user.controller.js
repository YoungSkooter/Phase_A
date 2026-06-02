const userService = require("../services/user.service");

const createUser = (req, res) => {
  const user = userService.createUser(req.body);
  res.status(201).json(user);
};

const getAllUsers = (req, res) => {
  res.json(userService.getAllUsers());
};

const getUserById = (req, res) => {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const deleteUser = (req, res) => {
  const user = userService.deleteUser(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User deleted", user });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};