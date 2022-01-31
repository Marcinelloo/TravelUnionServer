const mongoose = require("mongoose");

const OpinionSchema = mongoose.Schema({
  userID: { type: mongoose.SchemaTypes.ObjectId, required: true, unique: true },
  description: { type: String, required: true },
  rate: { type: String, required: true },
});

module.exports = mongoose.model("Opinion", OpinionSchema);
