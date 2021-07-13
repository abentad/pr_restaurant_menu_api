const {
  createRestaurant,
  receiveRestaurants,
  requestRestaurantById,
  updateRestaurantInfo,
  deleteRestaurantInfo,
} = require("../services/restaurant_services");
const path = require("path");

// const fileUpload = require("express-fileupload");

// const cloudinary = require("../config/cloudinary_config");

module.exports = {
  addRestaurant: async (req, res) => {
    // const result = await cloudinary.uploader.upload(req.file.path);
    // const newImageUrl = result.secure_url.replace(
    //   /v[0-9]+/,
    //   "c_scale,h_450,w_700"
    // );
    // console.log(result);
    let imageFile;
    let uploadPath;
    let imagePath;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded" });
    } else {
      //name of the input is newImageUrl
      imageFile = req.files.imageFile;
      // uploadPath = __dirname + "/uploads/" + imageFile.name;
      uploadPath = path.join(__dirname + "/uploads/");
      imagePath = uploadPath + imageFile.name;
      console.log("image path : " + imagePath);

      //use mv() to move file on the server
      imageFile.mv(imagePath, (error) => {
        if (error) {
          res.status(500).json({
            message: `cannot upload images to server because: ${error.message}`,
          });
        } else {
          // res.json({ message: "file uploaded successfully" });
          const body = req.body;
          createRestaurant(body, imageFile.name, (error, results) => {
            if (error) {
              console.log(error.message);
              res.json({
                message: `failed to insert restaurant because: ${error.message}`,
              });
            } else {
              res.json({ results });
            }
          });
        }
      });
    }
  },
  getRestaurants: (req, res) => {
    receiveRestaurants((error, results) => {
      if (error) {
        console.log(error.message);
        res.json({
          message: `failed to get restaurants because\n${error.message}`,
        });
      } else {
        res.json({ results });
      }
    });
  },
  getRestaurantById: (req, res) => {
    const id = req.params.id;
    requestRestaurantById(id, (error, results) => {
      if (error) {
        console.log(error.message);
        res.json({
          message: `failed to get restaurant by id\n${error.message}`,
        });
      } else {
        res.json({ results });
      }
    });
  },
  updateRestaurant: (req, res) => {
    const body = req.body;
    updateRestaurantInfo(body, (error, results) => {
      if (error) {
        console.log(error.message);
        res.json({
          message: `failed to update restaurant info because\n${error.message}`,
        });
        return;
      } else {
        res.json({ message: "restaurant updated succesfully" });
      }
    });
  },
  deleteRestaurant: (req, res) => {
    const id = req.params.id;
    deleteRestaurantInfo(id, (error, results) => {
      if (error) {
        console.log(error.message);
        res.json({
          message: `failed to remove restaurant info because\n${error.message}`,
        });
        return;
      } else {
        res.json({ message: "restaurant removed succesfully" });
      }
    });
  },
};
