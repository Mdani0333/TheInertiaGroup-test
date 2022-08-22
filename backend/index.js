const express = require("express");
var cors = require('cors');
const app = express();
const productRoutes = require('./product');
const purchaseRoutes = require('./purchase');


app.use(cors());
//routes
app.use("/products", productRoutes);
app.use("/purchases", purchaseRoutes);

//Server running on localhost
const port = 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
