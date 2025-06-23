const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve frontend files
app.use(express.static("../public"));

// Dummy data (you can connect to MongoDB later)
const users = [];

// Route to handle form submission
app.post("/join", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Please enter all fields." });
  }

  users.push({ name, email });
  console.log("New user joined:", name, email);
  return res.status(200).json({ message: `Thank you, ${name}!` });
});

// Run server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
