const mongoose = require("mongoose");

const TravelSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  residance: { type: Number, required: true },
  travelDays: [{ type: String, required: true }],
  city: { type: mongoose.SchemaTypes.ObjectId, required: true },
});

module.exports = mongoose.model("Travel", TravelSchema);
