const {
  createProperty,
  getAllProperties,
  getSingleProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");
const catchAsync = require("../services/catchAsync");

const router = require("express").Router();

router
  .route("/")
  .post(catchAsync(createProperty))
  .get(catchAsync(getAllProperties));

router
  .route("/:id")
  .get(catchAsync(getSingleProperty))
  .patch(catchAsync(updateProperty))
  .delete(catchAsync(deleteProperty));

module.exports = router;
