const { feedVehicles } = require("./seeds/feed_vehicles");

const runFeeds = async () => {

await feedVehicles()
process.exit()
}
runFeeds()