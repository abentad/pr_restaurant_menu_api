const express = require('express');
const app = express();
const restaurantRoute = require('./routes/restaurant_routes');

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message: "server working well."});
})

app.use("/api/restaurants",restaurantRoute);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server started at port: ${port}\nhttp://localhost:${port}`));