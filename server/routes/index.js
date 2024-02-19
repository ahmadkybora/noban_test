const express = require('express');
const router = express.Router();
const homeController = require("../app/controllers/homeController");

router.get("/", homeController.getData);
router.post("/add-to-cart", homeController.addToCart);
router.post("/remove-from-cart", homeController.removeFromCart);
router.get("/get-cart", homeController.getCart);
router.post("/pay", homeController.pay);

module.exports = router;
