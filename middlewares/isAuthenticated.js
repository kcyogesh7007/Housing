const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        message: "Authentication required. Please login ",
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
module.exports = isAuthenticated;
