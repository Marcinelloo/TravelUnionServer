const express = require("express");
const router = express.Router();
const User = require("../models/User");
import bcrypt from "bcryptjs";

router.get("/get", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "no users in database" });
  }
});

router.post("/signIn", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).json(user);
    }
  }
  res.status(500).json({ message: "user with that id doesnt exists" });
});

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    await user.save();
    res.status(200).json({ message: "user created" });
  }
  res.status(500).json({ message: "cannot create user" });
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await User.delete({ _id: id });
    res.status(200).json({ message: "user deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete user" });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({ message: "user updated" });
  } catch (err) {
    res.status(500).json({ message: "cannot update user" });
  }
});

module.exports = router;
