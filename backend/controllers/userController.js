// controllers/userController.js
const { User, users } = require("../models/User");

// Register user
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if user exists
  const existing = users.find(u => u.email === email);
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User(name, email, password);
  users.push(newUser);

  return res.status(201).json({ message: "User registered successfully", user: newUser });
};

// Login user
const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.json({ message: "Login successful", user });
};

module.exports = { registerUser, loginUser };
