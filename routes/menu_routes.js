const router = require('express').Router();
const {addFood, getFoodListByRestaurantId,removeFoodByFoodId} = require('../controller/menu_controller');

router.post("/",addFood);
router.get("/:id", getFoodListByRestaurantId);
router.delete("/:id",removeFoodByFoodId);

module.exports = router;

