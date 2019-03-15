const router = require("express").Router();
const PolygonController = require("../../controllers/PolygonController");

// Matches with "/api/polygons"
router.route("/")
  .get(PolygonController.findAll)
  .post(PolygonController.create);

// Matches with "/api/polygons/:id"
router
  .route("/:id")
  .get(PolygonController.findById)
  .put(PolygonController.update)
  .delete(PolygonController.remove);

module.exports = router;
