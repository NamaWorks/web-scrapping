const { getVehicles } = require("../controllers/vehicle_controller")

const vehiclesRouter = require("express").Router()

vehiclesRouter.get("/all", getVehicles)

module.exports = vehiclesRouter