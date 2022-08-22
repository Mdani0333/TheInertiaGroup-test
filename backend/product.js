const router = require("express").Router();
var fs = require('fs');


router.get("/", async (req, res) => {
  try {
    let data = fs.readFileSync('products.json');
    var products = JSON.parse(data);
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = router;
