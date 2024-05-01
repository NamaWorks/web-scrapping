const puppeteer = require("puppeteer");
// const { connectDB } = require("../src/config/db")
const Element = require("../api/models/element_model");
const { scrapVehicles } = require("./scrapping_functions/scrap_vehicles");
const { scrapGeneral } = require("./scrapping_functions/scrap_general");


const scrapeElements = async () => {
  // scrapVehicles();
  scrapGeneral("Vehicles")
  scrapGeneral("Characters")
  scrapGeneral("Locations")
};

scrapeElements();