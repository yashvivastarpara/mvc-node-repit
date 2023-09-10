const express = require("express");
const connect = require("./config/database");
const router = require("./routes/mvc-routes");
const std = require("./models/mvc-schema");
const checkdata = require("./middleware/mvc-middleware");

const app = express();
app.use(express.json());
app.use(router);

app.listen(8090, () => {
  console.log("listining port 8090");
  connect();
});
