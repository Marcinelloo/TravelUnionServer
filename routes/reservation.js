const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

router.get("/get", async (req, res) => {
  try {
    const Reservations = await Reservation.find();
    res.status(200).json(Reservations);
  } catch (err) {
    res.status(500).json({ message: "no Reservations in database" });
  }
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const Reservation = await Reservation.findById(id);
    res.status(200).json(Reservation);
  } catch (err) {
    res.status(500).json({ message: "Reservation with that id doesnt exists" });
  }
});

router.post("/createNew", async (req, res) => {
  const Reservation = new Reservation(req.body);

  try {
    await Reservation.save();
    res.status(200).json({ message: "Reservation created" });
  } catch (err) {
    res.status(500).json({ message: "cannot create Reservation" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Reservation.delete({ _id: id });
    res.status(200).json({ message: "Reservation deleted" });
  } catch (err) {
    res.status(500).json({ message: "cannot delete Reservation" });
  }
});

router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedReservation = await Reservation.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({ message: "Reservation updated" });
  } catch (err) {
    res.status(500).json({ message: "cannot update Reservation" });
  }
});

module.exports = router;
