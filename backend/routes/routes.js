const express = require('express');
const route = express();
const service = require('../services/services')

route.get("/getAllEvenements", service.getAllEvenements);
route.get("/getCurrentEvenements", service.getCurrentEvenements);
route.get("/getOneEvenement/:id", service.getOneEvenements);
route.post("/postEvenement", service.postEvenement);
route.post("/postMember", service.postMember);
route.delete("/deleteEvenement/:id", service.deleteEvenement);

module.exports = route;