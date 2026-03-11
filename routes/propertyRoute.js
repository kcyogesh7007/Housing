const {
  createProperty,
  getAllProperties,
  getSingleProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const restrictTo = require("../middlewares/restrictTo");
const catchAsync = require("../services/catchAsync");

const router = require("express").Router();

router
  .route("/")
  .post(isAuthenticated, catchAsync(createProperty))
  .get(catchAsync(getAllProperties));

router
  .route("/:id")
  .get(catchAsync(getSingleProperty))
  .patch(isAuthenticated, restrictTo("admin"), catchAsync(updateProperty))
  .delete(isAuthenticated, restrictTo("admin"), catchAsync(deleteProperty));

module.exports = router;
