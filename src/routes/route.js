const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", (req, res) => {
  res.send("Hi Aman I am Called ");
});

router.post("/send-otp", userController.sendOtp);
router.post("/verify-otp", userController.verifyOtp);

module.exports = router;
