const checkdata = (req, res, next) => {
  if (req.body.password) {
    next();
  } else {
    res.send(" pass missing");
  }
};

module.exports = checkdata;
