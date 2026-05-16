const auth = (req, res, next) => {
  const token = "abc";
  const isAuthentication = token === "abc";
  if (!isAuthentication) {
    res.status(401).send("Authentication failed");
  } else {
    next();
  }
};
module.exports = { auth };
