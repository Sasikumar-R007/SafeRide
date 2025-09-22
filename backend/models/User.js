const bcrypt = require("bcrypt");

// Sample users (teacher + parent)
const users = [
  {
    id: 1,
    name: "John Teacher",
    email: "teacher@saferide.com",
    password: bcrypt.hashSync("123456", 10),
    role: "teacher",
  },
  {
    id: 2,
    name: "Alice Parent",
    email: "parent@saferide.com",
    password: bcrypt.hashSync("123456", 10),
    role: "parent",
    child: {
      id: "S101",
      name: "Ravi Kumar",
      class: "5A",
      bus_id: "BUS-12",
    },
  },
];

function findUserByEmail(email) {
  return users.find((u) => u.email === email);
}

module.exports = { users, findUserByEmail };
