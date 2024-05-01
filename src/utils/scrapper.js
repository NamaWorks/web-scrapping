const { scrapGeneral } = require("./scrapping_functions/scrap_general");


const scrapeElements = async () => {
  await scrapGeneral("Vehicles")
  // await scrapGeneral("Characters")
  // await scrapGeneral("Locations")
};

scrapeElements();