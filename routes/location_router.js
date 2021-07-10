const router = require('express').Router();
const {addLocation, getLocationById,removeLocationById} = require('../controller/location_controller');

router.post("/",addLocation);
router.get("/:id",getLocationById);
router.delete("/:id", removeLocationById);

module.exports = router;