const checkdata = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.send("missing");
    // let name = req.body.name ? "" : "name";
    // console.log(name);
    // res.send(`missing checkdata ${name}`);
  }
};

module.exports = checkdata;
