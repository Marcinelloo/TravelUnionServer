const express = require("express");
const router = express.Router();
const Offer = require("../models/Offer");

router.get("/get", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (err) {
    res.status(500).json({ message: "no Offers in database" });
  }
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const offer = await Offer.findById(id);
    res.status(200).json(offer);
  } catch (err) {
    res.status(500).json({ message: "Offer with that id doesnt exists" });
  }
});

router.get("/get/byCountry/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const offer = await Offer.where("country").equals(id);
    res.status(200).json(offer);
  } catch (err) {
    res.status(500).json({ message: "Offer with that id doesnt exists" });
  }
});

router.get("/getOurChoice", async (req, res) => {
  try {
    const offer = await Offer.where("price").gt(1000).limit(3);
    res.status(200).json(offer);
  } catch (err) {
    res.status(500).json({ message: "Offer with that id doesnt exists" });
  }
});

router.get("/getTheBest", async (req, res) => {
  try {
    const offer = await Offer.where("stars").equals(5).limit(3);
    res.status(200).json(offer);
  } catch (err) {
    res.status(500).json({ message: "Offer with that id doesnt exists" });
  }
});

router.post("/createNew", async (req, res) => {
  console.log(req.body);
  const offer = new Offer(req.body);

  try {
    await offer.save();
    res.status(200).json({ message: "Offer created" });
  } catch (err) {
    console.log(err);
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
