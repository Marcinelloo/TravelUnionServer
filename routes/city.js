const express = require("express");
const router = express.Router();
const City = require("../models/City");

router.get("/get", async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: "no cities in database" });
  }
});

router.get("/get/:countryId", async (req, res) => {
  const id = req.params.countryId;

  try {
    const cities = await City.where("countryID").equals(id);
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: "no cities in database" });
  }
});

router.post("/createNew", async (req, res) => {
  const city = new City(req.body);

  try {
    await city.save();
    res.status(200).json({ message: "City created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create City" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await City.delete({ _id: id });
    res.status(200).json({ message: "user deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete user" });
  }
});

module.exports = router;
