const puppeteer = require("puppeteer");
const fs = require("fs")

async function scrapVehicles() {
  const url = "https://www.starwars.com/databank";
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    // args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(url);
  const vehiclesLi = await page.waitForSelector("[data-title='Vehicles']");
  await vehiclesLi.click()
  await checkAndGetElements()
  // const vehiclesLiClicked = await page.waitForSelector("[data-title='Vehicles']")
  
  async function checkAndGetElements () {
    let replacingData
    try {
      replacingData = await page.waitForSelector(".replacing-data")
    } catch (err) {
      replacingData = false
    }
    if(replacingData){
      checkAndGetElements()
    } else {
      // await showAllElements()
      getElements()
    }
  }

  async function getElements(){
    const elementsContainer = await page.waitForSelector(".blocks-list-view.active")
    // await page.waitForSelector(".building-block-wrapper")
    const elements = await elementsContainer.$$("li")
  
    let elementsArray =[]
  
    for (const element of elements) {
      let img
      let name
      let detail
  
      const imgElement = await element.$("img")
      if(imgElement){
        img = await imgElement.evaluate(element => element.src)
      }
      const nameElement = await element.$(".long-title")
      if(nameElement){
        name = await nameElement.evaluate(element => element.innerText)
      }
      const detailElement = await element.$(".desc")
      if(detailElement){
        detail = await detailElement.evaluate(element => element.innerText)
      }
      
      const elementData ={
        name,
        img,
        detail
      }
  
      elementsArray.push(elementData)
  
    }
  
  let jsonElementsArray = JSON.stringify(elementsArray)
  // console.log(jsonElementsArray)
  
    fs.writeFile(`./vehicles-data.json`, jsonElementsArray, ()=>{console.log(`data has been writen`)})
  
    browser.close()
  
  }

  async function showAllElements() {
    let showMoreButton = await page.waitForSelector(".show_more");
    if (showMoreButton) {
      while (showMoreButton) {
        try {
          await showMoreButton.click();
        } catch (err) {
          showMoreButton = false;
          console.log(`can't click showMoreButton`);
        }
      }
    }
  }

}

module.exports = { scrapVehicles }