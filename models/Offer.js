const mongoose = require("mongoose");

const OfferSchema = mongoose.Schema({
  type: { type: String, required: true, unique: true },
  hotelName: { type: String, required: true },
  city: { type: mongoose.SchemaTypes.ObjectId },
  stars: { type: String, required: true },
  photo: { type: Number, required: true },
  averageRate: { type: Number, required: true },
  opinions: [{ type: mongoose.SchemaTypes.ObjectId }],
  tripTerm: { type: Number, required: true },
  toCenter: { type: Number, required: true },
  discount: { type: Number, required: true },
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
});

module.exports = mongoose.model("Offer", OfferSchema);
