const express = require('express');
const router = express.Router();
const homeController = require("../app/controllers/homeController");

router.get("/", homeController.getData);
router.post("/add-to-cart", homeController.addToCart);
router.get("/get-cart", homeController.getCart);

module.exports = router;
