const express = require('express');
const app = express();
const restaurantRoute = require('./routes/restaurant_routes');
const restaurantLocationRoute = require('./routes/location_router');
const restaurantFoodMenuRoute = require('./routes/menu_routes');

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message: "Welcome to Restaurant Menu Api!\n*For restaurant: /api/restaurants \n*For restaurant location: /api/restaurant-location"});
})

app.use("/api/restaurants",restaurantRoute);
app.use("/api/restaurant-location",restaurantLocationRoute);
app.use("/api/restaurant-menu",restaurantFoodMenuRoute);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server started at port: ${port}\nhttp://localhost:${port}`));