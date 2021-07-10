const express = require('express');
const pool = require('../config/database');

const menuTable = "food_menu";

module.exports = {
    createFood: (data,callback)=>{
        pool.query(
            `insert into ${menuTable}(food_name,food_description,food_price,food_rating,food_image,restaurant_id) values(?,?,?,?,?,?)`,
            [
                data.food_name,
                data.food_description,
                data.food_price,
                data.food_rating,
                data.food_image,
                data.restaurant_id
            ],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }else{
                    callback(null,results);
                }
            }
        );
    },
    recieveFoodByRestaurantId: (id,callback)=>{
        pool.query(
            `select * from ${menuTable} where restaurant_id = ?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }else{
                    callback(null,results);
                }
            }
        )
    },
    deleteFoodByFoodId: (id,callback)=>{
        pool.query(
            `delete from ${menuTable} where food_id = ?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }else{
                    callback(null,results);
                }
            }
        )
    }
}