const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});
mongoose.connect("mongodb://127.0.0.1:27017/blogapp");

app.listen(4000);
