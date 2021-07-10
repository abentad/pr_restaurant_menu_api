const router = require("express").Router();
const {
  addFood,
  getFoodListByRestaurantId,
  removeFoodByFoodId,
} = require("../controller/menu_controller");

const upload = require("../config/multer_config");

router.post("/", upload.single("image"), addFood);
router.get("/:id", getFoodListByRestaurantId);
router.delete("/:id", removeFoodByFoodId);

module.exports = router;
