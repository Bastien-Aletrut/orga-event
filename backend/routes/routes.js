const express = require('express');
const route = express();
const service = require('../services/services')

route.get("/getEvenements", service.getEvenements);
route.post("/postEvenement", service.postEvenement);
route.delete("/deleteEvenement/:id", service.deleteEvenement);

module.exports = route;