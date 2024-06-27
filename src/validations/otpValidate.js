const otpVerification = async (otpTime) => {
  try {
    const cDateTime = new Date();
    const diffrenceValue = (otpTime - cDateTime.getTime()) / 1000;
    const difftime = diffrenceValue / 60;
    const mintutes = Math.abs(difftime);
    if (mintutes > 2) {
      return true;
    }
    return false;
  } catch (error) {
    return { code: 500, msg: error.message, data: {} };
  }
};

module.exports = {
  otpVerification,
};
