// // models/User.js
// const users = []; 
// // Temporary in-memory storage (later you can connect MongoDB or SQL)

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// module.exports = { User, users };

// backend/models/User.js (dummy data for now)
let users = [
  { id: 1, name: "Kunal", email: "kunal@example.com" },
  { id: 2, name: "Ruchi", email: "ruchi@example.com" },
  { id: 3, name: "Abhinav", email: "abhinav@example.com" }
];

module.exports = users;
