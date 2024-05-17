const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  bgcolor: {
    type: String,
    required: true,
  },
  panelcolor: {
    type: String,
    required: true,
  },
  textcolor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
