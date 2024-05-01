const Vehicle = require("../models/vehicle_model")

Vehicle

const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find()
    return res.status(200).json(vehicles)
  } catch (err) {
    return res.status(400).json(`error at getVehicles: ${err}`)
  }
}

module.exports = { getVehicles }