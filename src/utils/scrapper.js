const puppeteer = require("puppeteer");
// const { connectDB } = require("../src/config/db")
const Element = require("../api/models/element_model");

const scrapeElements = async () => {
  scrapVehicles();
};

scrapeElements();

//! Getting the vehicles information

async function scrapVehicles() {
  // await connectDB()

  const url = "https://www.starwars.com/databank";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();

  await page.goto(url);

  const filtersContainer = await page.$(".filters-container");
  const vehiclesLi = await page.waitForSelector("[data-title='Vehicles']");

  await vehiclesLi.click();

  const showMoreButton = await page.waitForSelector(".show_more")
  const showMoreContainer = await page.waitForSelector(".show_more_container") // Se pone en display none cuando no quedan más elementos


  // await browser.close()
}

