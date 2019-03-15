const router = require("express").Router();
const polygonRoutes = require("./polygons");

// Book routes

router.use("/polygons", polygonRoutes);

module.exports = router;
