const users = require("../data/users.store");

const createUser = (user) => {
  const newUser = {
    id: Date.now().toString(),
    ...user,
  };

  users.push(newUser);
  return newUser;
};

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((u) => u.id === id);
};

const deleteUser = (id) => {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) return null;

  const deleted = users.splice(index, 1);
  return deleted[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};