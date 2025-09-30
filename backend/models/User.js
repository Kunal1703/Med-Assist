// models/User.js
const users = []; 
// Temporary in-memory storage (later you can connect MongoDB or SQL)

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = { User, users };
