const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  password: "12345678",
  user: "test",
  port: 3306,
  database: "test",
});

const create = async (id, name) => {
  const sql = "INSERT INTO boilerplates(id,name) VALUES (?,?);";
  return await connection.promise().query(sql, [id, name]);
};

const findAll = async () => {
  const sql = "SELECT * FROM boilerplates;";
  return await connection.promise().query(sql);
};

const findById = async (id) => {
  const sql = "SELECT * FROM boilerplates WHERE id = ?;";
  return await connection.promise().query(sql, [id]);
};

const deleteById = async (id) => {
  const sql = "DELETE FROM boilerplates WHERE id = ?;";
  return await connection.promise().query(sql, [id]);
};

const updateById = async (id, name) => {
  const sql = "UPDATE boilerplates SET name = ? WHERE id = ?;";
  return await connection.promise().query(sql, [name, id]);
};

module.exports = {
  create,
  findAll,
  findById,
  deleteById,
  updateById,
};
