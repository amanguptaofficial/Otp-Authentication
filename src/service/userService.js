const otpModel = require("../Model/otp");
const { otpVerification } = require("../validations/otpValidate");
require("dotenv").config(); //import the package of dotenv and use config method for read this file
const otpGenerator = require("otp-generator");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendOtpService = async function (reqdata) {
  try {
    const { phoneNumber } = reqdata;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const cDate = new Date();
    await otpModel.findOneAndUpdate(
      { phoneNumber },
      { otp, otpExpiration: new Date(cDate.getTime()) },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    await client.messages.create({
      body: `your OTP is: ${otp}`,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
    return {
      code: 200,
      msg: "success",
      data: `otp sent successfully..${otp}`,
    };
  } catch (error) {
    return { code: 400, msg: error.message, data: {} };
  }
};

const verifyOtpService = async function (reqdata) {
  try {
    const { phoneNumber, otp } = reqdata;
    const otpData = await otpModel.findOne({ phoneNumber, otp });
    if (!otpData) return { code: 400, msg: "You entered wrong OTP", data: {} };
    const isOtpExpired = await otpVerification(otpData.otpExpiration);
    if (isOtpExpired) {
      return { code: 400, msg: "Your OTP Has been Expired!", data: {} };
    }
    return { code: 200, msg: "success", data: "Logged in successfully" };
  } catch (error) {
    return { code: 500, msg: error.message, data: {} };
  }
};

module.exports = {
  sendOtpService,
  verifyOtpService,
};
