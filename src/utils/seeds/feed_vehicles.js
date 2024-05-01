require("dotenv").config()
const mongoose = require("mongoose")
const Vehicle = require("../../api/models/vehicle_model")
const fs = require("fs")

const vehiclesArr = require("./vehicles.seed")
const vehiclesData = "src/utils/data/Vehicles-data.json"
const createJsFileWithData = async () => {
fs.readFile(vehiclesData, "utf8", (err, data)=> {
  fs.writeFile("src/utils/seeds/vehicles.seed.js", 
  `const vehiclesArr = ${data}; \n module.exports = vehiclesArr `,
  () => console.log(`file created`)
)
})
}

let preparedVehicles = []
const prepareVehicles = async () => {
vehiclesArr.forEach((vehicle)=> {
  // const parsedVehicle = JSON.parse(vehicle)
  console.log(vehicle)
  preparedVehicles.push(vehicle)
})
}

const feedVehicles = async () => {
  await createJsFileWithData()
  await prepareVehicles()
  try {
    await mongoose
    .connect(process.env.DB_URL)
    .then(async () => {
      const allVehicles = await Vehicle.find()
      if(allVehicles.length){
        Vehicle.collection.drop()
      }
    })
    .catch((err) => {
      console.log(`error removing existing data: ${err}`)
    })
    .then(async () => {
      await Vehicle.insertMany(preparedVehicles);
      console.log(`vehicles data inserted`)
    })
  } catch (err) {
    console.log(`error feeding vehicles: ${err}`)
  }
}

module.exports = {feedVehicles}