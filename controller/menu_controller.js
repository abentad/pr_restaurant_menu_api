const express = require("express");
const {
  createFood,
  recieveFoodByRestaurantId,
  deleteFoodByFoodId,
} = require("../services/menu_service");

const cloudinary = require("../config/cloudinary_config");

module.exports = {
  addFood: async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newImageUrl = result.secure_url.replace(
      /v[0-9]+/,
      "c_scale,h_450,w_700"
    );
    console.log(result);
    const body = req.body;
    createFood(body, newImageUrl, (error, results) => {
      if (error) {
        console.log(error.message);
        res.json({ message: `failed to insert food because ${error.message}` });
        return;
      } else {
        res.json({ results });
      }
    });
  },
  getFoodListByRestaurantId: (req, res) => {
    const id = req.params.id;
    recieveFoodByRestaurantId(id, (error, results) => {
      if (error) {
        console.log(error.message);
        res.json({
          message: `failed to get food list because ${error.message}`,
        });
        return;
      } else {
        res.json({ results });
      }
    });
  },
  removeFoodByFoodId: (req, res) => {
    const id = req.params.id;
    deleteFoodByFoodId(id, (error, results) => {
      if (error) {
        console.log(error.message);
        res.json({ message: `failed to remove food because ${error.message}` });
        return;
      } else {
        res.json({ message: "food removed successfully" });
      }
    });
  },
};
