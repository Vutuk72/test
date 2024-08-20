const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sys: {
    cts: { type: Date, required: true, default: Date.now },
    mts: { type: Date, require: true, default: Date.now },
    rev: { type: Number, require: true, default: 0 },
  },
  role: {
    type: Array,
    // required: true,
    // default: []
  },
});

module.exports = mongoose.model("user", userSchema);
