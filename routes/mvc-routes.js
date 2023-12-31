const Router = require("express");
const std = require("../models/mvc-schema");
const checkdata = require("../middleware/mvc-middleware");
let router = Router();

router.get("/", async (req, res) => {
  let data = await std.find();
  res.send(data);
});

router.post("/login", checkdata, async (req, res) => {
  await std.create(req.body);
  res.send("login");
  console.log(req.body);
});

router.delete("/delete/:id", async (req, res) => {
  await std.findByIdAndDelete(req.params.id);
  console.log("delete");
  console.log(req.params);
  res.send("delete");
});
router.get("/index", (req, res) => {
  res.render("index");
});

module.exports = router;
