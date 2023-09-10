const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mvc-repet");
  console.log("connected to mongodb");
};
module.exports = connect;
