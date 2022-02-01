const mongoose = require("mongoose");

const CurrencySchema = mongoose.Schema({
  polishName: { type: String, required: true },
  englishName: { type: String, required: true },
  shortcut: { type: String, required: true },
});

module.exports = mongoose.model("Currency", CurrencySchema);
