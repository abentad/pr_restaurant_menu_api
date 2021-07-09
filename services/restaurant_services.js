const express = require('express');
const pool = require('../config/database');


const restaurantTable = "restaurant";

module.exports = {
    createRestaurant: (data,callback)=>{
        pool.query(
            `insert into ${restaurantTable}(restaurant_name, restaurant_image) values(?,?)`,
            [
                data.restaurant_name,
                data.restaurant_image
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
    receiveRestaurants: callback =>{
        pool.query(
            `Select * from ${restaurantTable}`,
            [],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }else{
                    callback(null,results);
                }
            }
        );
    },
    requestRestaurantById: (id,callBack)=>{
        pool.query(
            `select * from ${restaurantTable} where restaurant_id = ?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results[0]);
                }
            }
        )
    },
    updateRestaurantInfo:(data,callBack)=>{
        pool.query(
            `update ${restaurantTable} set restaurant_name=?, restaurant_image=? where restaurant_id = ?`,
            [
                data.restaurant_name,
                data.restaurant_image,
                data.restaurant_id
            ],
            (error,results)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results[0]);
                }
            }
        );
    },
    deleteRestaurantInfo:(id,callBack)=>{
        pool.query(
            `delete from ${restaurantTable} where restaurant_id = ?`,
            [id],
            (error,results)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results[0]);
                }
            }
        )
    }
}