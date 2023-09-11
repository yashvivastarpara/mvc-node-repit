const mongoose = require("mongoose");
let mvcschema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  password: String,
  grid: Number,                                                              
});

const std = mongoose.model("std", mvcschema);
module.exports = std;
