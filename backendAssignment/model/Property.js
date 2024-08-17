// // models/Property.js
// const mongoose = require('mongoose');

// const PropertySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String, required: true },
//   images: { type: [String], required: false },
// }, { timestamps: true });

// module.exports = mongoose.model('Property', PropertySchema);


// models/Property.js

const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: false },
}, { timestamps: true });

module.exports = mongoose.model('Property', PropertySchema);

