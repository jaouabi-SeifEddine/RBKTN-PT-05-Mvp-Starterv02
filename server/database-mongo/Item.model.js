const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  title: String,
  article: String,
  date: Date
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;