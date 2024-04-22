const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log(`connection to DB successful`)
  } catch (err) {
    console.log(`error connecting to DB: ${err}`)
  }
}

module.exports = { connectDB }