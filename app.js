require("dotenv").config();
const express = require("express");
const connectDB = require("./database/database");
const cookieParser = require("cookie-parser");

const app = express();

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const propertyRoute = require("./routes/propertyRoute");
const authRoute = require("./routes/authRoute");

app.use("/api/properties", propertyRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
