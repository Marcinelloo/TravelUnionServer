const express = require("express");
const router = express.Router();
const Travel = require("../models/Travel");

router.get("/get", async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (err) {
    res.status(500).json({ message: "no Travels in database" });
  }
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const travels = await Travel.findById(id);
    res.status(200).json(travels);
  } catch (err) {
    res.status(500).json({ message: "Travel with that id doesnt exists" });
  }
});

router.post("/createNew", async (req, res) => {
  const travel = new Travel(req.body);

  try {
    await travel.save();
    res.status(200).json({ message: "Travel created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create Travel" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Travel.delete({ _id: id });
    res.status(200).json({ message: "Travel deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete Travel" });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTravel = await Travel.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({ message: "Travel updated" });
  } catch (err) {
    res.status(500).json({ message: "cannot update Travel" });
  }
});

module.exports = router;
