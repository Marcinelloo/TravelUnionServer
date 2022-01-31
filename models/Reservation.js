const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  userID: { type: String, required: true },
  offerID: { type: String, required: true },
  dateFrom: { type: Date, default: () => Date.now },
  adoult: { type: Number, required: true },
  chilldren: { type: Number, required: true },
  dateTo: { type: Date, required: true },
  payed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
