const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  exercice: String,
  sets: Number,
  reps: Number,
  weight: Number
});

const item = mongoose.model("item", itemSchema);

module.exports = item;