const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vehicleSchema = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    detail: { type: String, required: true },
    category: { type: String, default: "vehicle" }
  },
   {
    timestamps: true,
   }
)

const Vehicle = mongoose.model("vehicle", vehicleSchema, "vehicle")

module.exports = Vehicle