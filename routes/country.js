const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

router.get("/get", async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json({ message: "no countries in database" });
  }
});

router.post("/createNew", async (req, res) => {
  const country = new Country(req.body);

  try {
    await country.save();
    res.status(200).json({ message: "Country created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create Country" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Country.delete({ _id: id });
    res.status(200).json({ message: "user deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete user" });
  }
});

module.exports = router;
