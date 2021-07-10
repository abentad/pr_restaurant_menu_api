const express = require('express');
const pool = require('../config/database');

const locationTable = 'restaurant_location';

module.exports = {
    createLocation: (data,callback) => {
        pool.query(
            `insert into ${locationTable}(location_address, can_serve_inside_car, restaurant_id) values(?,?,?)`,
            [
                data.location_address,
                data.can_serve_inside_car,
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
    receiveLocationById: (id,callback)=>{
        pool.query(
            `select * from ${locationTable} where restaurant_id = ?`,
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
    deleteLocationById:(id,callback)=>{
        pool.query(
            `delete from ${locationTable} where location_id = ?`,
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