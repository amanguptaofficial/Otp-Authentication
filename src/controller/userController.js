const userService = require("../service/userService");
const sendOtp = async function (req, res) {
  try {
    const otpData = await userService.sendOtpService(req.body);
    res.send(otpData);
  } catch (error) {
    res.send({ code: 400, msg: error.message, data: {} });
  }
};

const verifyOtp = async function (req, res) {
  try {
   const result = await userService.verifyOtpService(req.body);
   res.send(result);
  } catch (error) {
    res.send({ code: 500, msg: error.message, data: {} });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};
