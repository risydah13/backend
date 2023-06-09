/*
  IMPORT MODULE EXPRESS AND HANDLERS
*/
const express = require("express");
const { home, register, login, logout, getAllUsers, getUserById, deleteUserById } = require("../controllers/users");
const { verifyToken } = require("../middleware/verifyToken.js");
const { refreshToken } = require("../controllers/refreshToken");

const user = express.Router();

// Mendefinisikan rute
user.get("/home", verifyToken, home);
user.post("/signup", register);
user.post("/login", login);
user.get("/users", getAllUsers); // Rute untuk mendapatkan semua pengguna
user.get("/user/:id", getUserById); // Rute untuk mendapatkan pengguna berdasarkan ID
user.get("/token", refreshToken);
user.delete("/user/:id", deleteUserById); // Rute untuk menghapus pengguna berdasarkan ID
user.delete("/logout", logout);

module.exports = user;
