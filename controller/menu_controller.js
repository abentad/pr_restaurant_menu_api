const express = require('express');
const {createFood,recieveFoodByRestaurantId, deleteFoodByFoodId} = require('../services/menu_service');

module.exports = {
    addFood: (req,res)=>{
        const body = req.body;
        createFood(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to insert food because ${error.message}`});
                return;
            }else{
                res.json({results});
            }
        });
    },
    getFoodListByRestaurantId: (req,res)=>{
        const id = req.params.id;
        recieveFoodByRestaurantId(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to get food list because ${error.message}`});
                return;
            }else{
                res.json({results});
            }
        });
    },
    removeFoodByFoodId: (req,res)=>{
        const id = req.params.id;
        deleteFoodByFoodId(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to remove food because ${error.message}`});
                return;
            }else{
                res.json({message: "food removed successfully"});
            }
        });
    }
}
