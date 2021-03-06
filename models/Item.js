const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String,
  // date: { type: Date, default: Date.now },
  date: String,
  artist: String,
  genre: String,
  album: String,
  releaseDate: Date,
  series: String,
  issue: Number,
  type: String,
  year: Number,
  country: String,
  mintMark: String,
  quantity: Number,
  category: String, //assigned by user to all of them
  collectionId: String,
  game: String,
  name: String
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
