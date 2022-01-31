const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/get", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "no users in database" });
  }
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "user with that id doesnt exists" });
  }
});

router.post("/createNew", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(200).json({ message: "user created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create user" });
  }
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
