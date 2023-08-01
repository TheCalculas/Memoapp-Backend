var jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
const jwts = process.env.JWT_SECRET;
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({
      error: "Invalid token please authenticate using valid credentials.",
    });
  }

  try {
    // token jo fetch hoga voh verify hoga aur iss string mei aaega
    const data = jwt.verify(token, jwts);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({
      error: "Invalid token please authenticate using valid credentials.",
    });
  }
};
module.exports = fetchUser;
