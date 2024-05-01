require("dotenv").config()

const express = require("express")
const { connectDB } = require("./src/config/db")
const vehiclesRouter = require("./src/api/routes/vehicle_routes")

connectDB()

const app = express()

app.use(express.json())

app.use("/api/v01/vehicles", vehiclesRouter)

app.listen(3000, () => {
  console.log(`server launched at: http://localhost:3000`)
})

