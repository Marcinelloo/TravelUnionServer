const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");

router.get("/get", async (req, res) => {
  try {
    const Offers = await Offer.find();
    res.status(200).json(Offers);
  } catch (err) {
    res.status(500).json({ message: "no Offers in database" });
  }
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const Offer = await Offer.findById(id);
    res.status(200).json(Offer);
  } catch (err) {
    res.status(500).json({ message: "Offer with that id doesnt exists" });
  }
});

router.post("/createNew", async (req, res) => {
  const Offer = new Offer(req.body);

  try {
    await Offer.save();
    res.status(200).json({ message: "Offer created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create Offer" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Offer.delete({ _id: id });
    res.status(200).json({ message: "Offer deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete Offer" });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedOffer = await Offer.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({ message: "Offer updated" });
  } catch (err) {
    res.status(500).json({ message: "cannot update Offer" });
  }
});

module.exports = router;
