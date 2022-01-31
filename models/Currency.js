const mongoose = require("mongoose");

const CurrencySchema = mongoose.Schema({
  polishName: { type: String, required: true, unique: true },
  englishName: { type: String, required: true, unique: true },
  polishShortcut: { type: String, required: true, unique: true },
  englishShortCut: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Currency", CurrencySchema);