const {
  getMyProfile,
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const catchAsync = require("../services/catchAsync");

const router = require("express").Router();

router.route("/register").post(catchAsync(registerUser));
router.route("/login").post(catchAsync(loginUser));
router.route("/logout").post(catchAsync(logoutUser));
router.route("/profile").get(isAuthenticated, catchAsync(getMyProfile));

module.exports = router;
