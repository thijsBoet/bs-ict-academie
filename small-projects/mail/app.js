"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`)
);

app.use(express.static(path.join(__dirname, "public")));

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.gmail_user,
    pass: process.env.gmail_app_password, // naturally, replace both with your real credentials or an application-specific password
  },
});

const mailOptions = {
  from: process.env.gmail_user,
  to: "m.boet@chello.nl",
  subject: "Invoices due",
  text: "Dudes, we really need your money.",
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});