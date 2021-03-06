const {
  addRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantImage,
} = require("../controller/restaurant_controller");
const router = require("express").Router();

// const upload = require("../config/multer_config");
// router.post("/", upload.single("image"), addRestaurant);
router.post("/", addRestaurant);
router.get("/", getRestaurants);
router.get("/image/:imagename", getRestaurantImage);
router.get("/:id", getRestaurantById);
router.patch("/", updateRestaurant);
router.delete("/:id", deleteRestaurant);

module.exports = router;
