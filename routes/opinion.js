const express = require("express");
const router = express.Router();
const Opinion = require("../models/Opinion");

router.get("/get", async (req, res) => {
  try {
    const opinions = await Opinion.find();
    res.status(200).json(opinions);
  } catch (err) {
    res.status(500).json({ message: "no Opinions in database" });
  }
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const opinions = await Opinion.findById(id);
    res.status(200).json(opinions);
  } catch (err) {
    res.status(500).json({ message: "Opinion with that id doesnt exists" });
  }
});

router.post("/createNew", async (req, res) => {
  const opinions = new Opinion(req.body);

  try {
    await opinions.save();
    res.status(200).json({ message: "Opinion created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create Opinion" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Opinion.delete({ _id: id });
    res.status(200).json({ message: "Opinion deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete Opinion" });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedOpinion = await Opinion.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({ message: "Opinion updated" });
  } catch (err) {
    res.status(500).json({ message: "cannot update Opinion" });
  }
});

module.exports = router;
