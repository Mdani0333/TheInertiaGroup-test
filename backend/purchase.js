const router = require("express").Router();
var fs = require("fs");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.post("/post", jsonParser, async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("purchases.json"));
    data.push(req.body);
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile("purchases.json", jsonData, finished);
    function finished() {
      res.status(201).send({ message: "Added to cart" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    let data = fs.readFileSync("purchases.json");
    var purchases = JSON.parse(data);
    res.status(200).send(purchases);
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = router;
