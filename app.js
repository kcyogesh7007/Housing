const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./database/database");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const propertyRoute = require("./routes/propertyRoute");

app.use("/api/properties", propertyRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
