# OTP Authentication System

This repository contains the code for implementing a complete OTP (One-Time Password) authentication system using (MongoDB, Express.js, Node.js) stack. With this system, users can register for an account, verify their identity using OTP sent to their mobile number or email, and securely authenticate themselves.

## Features

- Send OTP
- verify OTP

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Twilio (for Sending OTP)
- otp-generator (for generating OTP)

## Setup Instructions

### Clone the Repository

Use `git clone` to clone this repository to your local machine.

```
git clone https://github.com/amanguptaofficial/Otp-Authentication.git

```

## create a Twilio Account for sending OTP

- Twilio provide the TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_PHONE_NUMBER

## create a .env file and Give the Value of this all properties inside the .env file no need to exports this file and no need to give comma or semicolon Please read carefully

## Access the Application

backend servers are running, you can access the application at http://localhost:3000/send-otp,http://localhost:3000/verify-otp in the postman

Feel free to explore, test, and customize this OTP authentication system according to your requirements. If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

Happy coding! 🚀
