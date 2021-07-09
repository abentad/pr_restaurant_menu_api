const {createRestaurant, receiveRestaurants,requestRestaurantById, updateRestaurantInfo, deleteRestaurantInfo} = require('../services/restaurant_services');

module.exports = {
    addRestaurant:(req,res) =>{
        const body = req.body;
        createRestaurant(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to insert restaurant because\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    getRestaurants:(req,res)=>{
        receiveRestaurants((error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to get restaurants because\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    getRestaurantById:(req,res)=>{
        const id = req.params.id;
        requestRestaurantById(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to get restaurant by id\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    updateRestaurant:(req,res)=>{
        const body = req.body;
        updateRestaurantInfo(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to update restaurant info because\n${error.message}`});
                return;
            }else{
                res.json({message: "restaurant updated succesfully"});
            }
        });
    },
    deleteRestaurant:(req,res)=>{
        const id = req.params.id;
        deleteRestaurantInfo(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to remove restaurant info because\n${error.message}`});
                return;
            }else{
                res.json({message: "restaurant removed succesfully"});
            }
        });
    }
}