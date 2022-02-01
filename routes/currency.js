const express = require("express");
const router = express.Router();
const Currency = require("../models/Currency");

router.get("/get", async (req, res) => {
  try {
    const Currencys = await Currency.find();
    res.status(200).json(Currencys);
  } catch (err) {
    res.status(500).json({ message: "no Currencys in database" });
  }
});

router.post("/createNew", async (req, res) => {
  const currency = new Currency(req.body);

  try {
    await currency.save();
    res.status(200).json({ message: "Currency created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "cannot create currency" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Currency.delete({ _id: id });
    res.status(200).json({ message: "Currency deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete Currency" });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCurrency = await Currency.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).json({ message: "Currency updated" });
  } catch (err) {
    res.status(500).json({ message: "cannot update Currency" });
  }
});

module.exports = router;
