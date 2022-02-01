const mongoose = require("mongoose");

const OfferSchema = mongoose.Schema({
  hotelType: { type: String, required: true },
  hotelName: { type: String, required: true },
  city: { type: mongoose.SchemaTypes.ObjectId },
  stars: { type: Number, required: true },
  photo: [{ type: String }],
  averageRate: { type: Number, default: 0 },
  opinions: [{ type: mongoose.SchemaTypes.ObjectId }],
  tripTerm: { type: Number, required: true },
  toCenter: { type: Number, required: true },
  discount: { type: Number, required: true },
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("Offer", OfferSchema);
