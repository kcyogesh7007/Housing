const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  if (!name || !email || !password || !phoneNumber) {
    return res.status(400).json({
      message: "Please provide name,email,password and phoneNumber",
    });
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({
      message: "User with that email is already registered",
    });
  }
  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    phoneNumber,
  });
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  const cookieDays = Number(process.env.COOKIE_EXPIRES_IN) || 7;
  res.cookie("token", token, {
    expires: new Date(Date.now() + cookieDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(201).json({
    message: "User registered successfully",
    data: user,
    token,
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email and password",
    });
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({
      message: "User doesnot exist with that email",
    });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  const cookieDays = Number(process.env.COOKIE_EXPIRES_IN) || 7;
  res.cookie("token", token, {
    expires: new Date(Date.now() + cookieDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  user.password = undefined;
  res.status(200).json({
    message: "User logged in successfully",
    token,
    data: user,
  });
};

exports.logoutUser = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json({
    message: "User logout successfully",
  });
};
exports.getMyProfile = async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  res.status(200).json({
    message: "User profile fetched successfully",
    data: user,
  });
};
