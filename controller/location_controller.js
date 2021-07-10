const {createLocation, receiveLocationById,deleteLocationById} = require('../services/location_service');

module.exports = {
    addLocation:(req,res)=>{
        const body = req.body;
        createLocation(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to insert location because\n${error.message}`});
            }else{
                res.json({results});
            }
        })
    },
    getLocationById:(req,res)=>{
        const id  = req.params.id;
        receiveLocationById(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to get locations because\n${error.message}`});
            }else{
                res.json({results});
            }
        })
    },
    removeLocationById:(req,res)=>{
        const id = req.params.id;
        deleteLocationById(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to remove location because\n${error.message}`});
            }else{
                res.json({message: "location removed successfully."});
            }
        })
    }
}