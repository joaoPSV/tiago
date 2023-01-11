const model = require("../models/user.model");

const create = async (id, name) => {
  await model.create(id, name);
};

const deleteById = async (id) => {
  await model.deleteById(id);
};

const updateById = async (id, name) => {
  await model.updateById(id, name);
};

const findById = async (id) => {
  const result = await model.findById(id);

  return result[0][0];
};

const findAll = async () => {
  const result = await model.findAll();

  return result[0];
};

module.exports = {
  create,
  deleteById,
  updateById,
  findById,
  findAll,
};
