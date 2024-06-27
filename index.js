const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require("./src/routes/route");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/otpdb")
  .then(() => {
    console.log("Mongo db connect succesfully");
  })
  .catch((error) => {
    console.log("error occured ....", error);
  });

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(
    `The Backend server started Successfully at PORT ${process.env.PORT}`
  );
});
