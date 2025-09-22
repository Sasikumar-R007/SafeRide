const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy data for testing
const users = [
  { email: "parent@saferide.com", password: "123456", role: "parent" },
  { email: "teacher@saferide.com", password: "123456", role: "teacher" },
];

// Root check
app.get("/", (req, res) => {
  res.send("SafeRide Backend Running ✅");
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  res.json({ message: "Login successful", role: user.role });
});

// Sample attendance endpoint
app.get("/api/attendance", (req, res) => {
  const attendance = [
    { name: "Ravi Kumar", class: "5A", bus: "Bus-12", status: "Present" },
    { name: "Sita Devi", class: "6B", bus: "Bus-15", status: "Absent" },
  ];
  res.json(attendance);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ SafeRide backend running on http://localhost:${PORT}`);
});
