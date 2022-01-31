const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
  cityName: { type: String, required: true, unique: true },
  countryID: { type: String, required: true },
});

module.exports = mongoose.model("City", CitySchema);
