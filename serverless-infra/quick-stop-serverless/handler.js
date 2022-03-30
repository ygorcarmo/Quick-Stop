const serverless = require("serverless-http");
const express = require("express");
const app = express();
var unirest = require("unirest");
require("dotenv").config();

app.get("/", (req, res, next) => {
  var test = unirest(
    "POST",
    "https://api.onegov.nsw.gov.au/FuelPriceCheck/v1/fuel/prices/nearby"
  );

  test.headers({
    "content-type": "application/json; charset=utf-8",
    authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    apikey: process.env.API_KEY,
    transactionid: "34",
    requesttimestamp: "24/03/2022 05:00:00 PM",
  });

  test.type("json");
  test.send({
    fueltype: "P95",
    brand: [
      "Caltex",
      "Shell",
      "BP",
      "7-Eleven",
      "Ampol",
      "Lowes",
      "Liberty",
      "Metro Fuel",
      "Mobil",
      "Speedway",
      "United",
    ],
    namedlocation: "2068",
    latitude: "-33.7977398",
    longitude: "151.1985015",
    sortby: "price",
    sortascending: "true",
  });

  test.end(function (respose) {
    if (respose.error)
      return res.status(400).json({
        message: respose.body,
      });

    // console.log(res.body);
    return res.status(200).json({
      stations: respose.body.stations,
      prices: respose.body.prices,
    });
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
