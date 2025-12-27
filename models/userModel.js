const { poolPromise, sql } = require('../config/db');

const createUser = async (name, email) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input('name', sql.VarChar, name)
    .input('email', sql.VarChar, email)
    .query(
      'INSERT INTO Users (name, email) VALUES (@name, @email)'
    );

  return result;
};

const getAllUsers = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .query('SELECT * FROM Users');

  return result.recordset;
};

const getUserById = async (id) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM Users WHERE id = @id');

  return result.recordset[0];
};

const updateUser = async (id, name, email) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input('id', sql.Int, id)
    .input('name', sql.VarChar, name)
    .input('email', sql.VarChar, email)
    .query(
      'UPDATE Users SET name = @name, email = @email WHERE id = @id'
    );

  return result.rowsAffected;
};

const deleteUser = async (id) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input('id', sql.Int, id)
    .query('DELETE FROM Users WHERE id = @id');

  return result.rowsAffected;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};