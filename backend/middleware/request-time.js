const { response } = require("express");

const requestTime = (request, response, next) => {
  console.log(`A request was made at ${Date.now()}: ${request.method}`);
  next();
};

module.exports = requestTime;
