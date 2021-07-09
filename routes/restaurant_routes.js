const {addRestaurant, getRestaurants,getRestaurantById,updateRestaurant,deleteRestaurant} = require('../controller/restaurant_controller');
const router = require('express').Router();

router.post("/",addRestaurant);
router.get("/",getRestaurants);
router.get("/:id",getRestaurantById);
router.patch("/",updateRestaurant);
router.delete("/:id",deleteRestaurant);

module.exports = router;