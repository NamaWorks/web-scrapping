const puppeteer = require("puppeteer");
// const { connectDB } = require("../src/config/db")
const Element = require("../api/models/element_model");
const { scrapVehicles } = require("./scrapping_functions/scrap_vehicles");

const scrapeElements = async () => {
  scrapVehicles();
};

scrapeElements();