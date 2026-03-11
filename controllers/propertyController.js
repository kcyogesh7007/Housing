const Property = require("../models/propertyModel");

// createProperty;
exports.createProperty = async (req, res) => {
  const owner = req.user._id;
  const {
    title,
    description,
    price,
    location,
    district,
    propertyType,
    purpose,
    bedrooms,
    bathrooms,
    area,
    images,
    isFeatured,
    status,
  } = req.body;
  const property = await Property.create({
    title,
    description,
    price,
    location,
    district,
    propertyType,
    purpose,
    bedrooms,
    bathrooms,
    area,
    images,
    isFeatured,
    status,
    owner,
  });
  res.status(201).json({
    message: "Property created successfully",
    data: property,
  });
};

// getAllProperties;
exports.getAllProperties = async (req, res) => {
  const properties = await Property.find()
    .sort({ createdAt: -1 })
    .populate("owner");
  if (properties.length == 0) {
    return res.status(404).json({
      message: "No property found",
    });
  }
  res.status(200).json({
    message: "Properties fetched successfully",
    data: properties,
  });
};

// getSingleProperty;
exports.getSingleProperty = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Please provide property id",
    });
  }
  const property = await Property.findById(id).populate("owner");
  if (!property) {
    return res.status(404).json({
      message: "No property found",
    });
  }
  res.status(200).json({
    message: "Property fetched successfully",
    data: property,
  });
};

// updateProperty;
exports.updateProperty = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Please provide property id",
    });
  }
  const property = await Property.findById(id);

  if (!property) {
    return res.status(404).json({
      message: "Property not found",
    });
  }

  const updatedProperty = await Property.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "Property updated successfully",
    data: updatedProperty,
  });
};

// deleteProperty;
exports.deleteProperty = async (req, res) => {
  const { id } = req.params;

  const property = await Property.findById(id);

  if (!property) {
    return res.status(404).json({
      message: "Property not found",
    });
  }

  await Property.findByIdAndDelete(id);

  res.status(200).json({
    message: "Property deleted successfully",
  });
};
