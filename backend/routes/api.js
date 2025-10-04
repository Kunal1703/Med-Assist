// // routes/api.js
// const express = require("express");
// const router = express.Router();

// const { registerUser, loginUser } = require("../controllers/userController");

// // Routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);

// module.exports = router;

const express = require("express");
const { getUsers, addUser } = require("../controllers/userController");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", addUser);

module.exports = router;
