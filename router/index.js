const express = require("express");
const router = express.Router();

const flightHandler = require("../handler/flight")

router.get("/detallesVuelo/:id", flightHandler.getOneFlight)
router.use("/", (req, res) => {res.status(404).send({ok:false, message: "The endpoint does not exists"})})
module.exports = router