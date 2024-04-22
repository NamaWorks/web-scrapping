const mongoose = require("mongoose")
const Schema = mongoose.Schema

const elementSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    detail: { type: String, required: true },
    kind: { type: String, required: false }
  },
   {
    timestamps: true,
   }
)

const Element = mongoose.model("element", elementSchema, "element")

module.exports = Element