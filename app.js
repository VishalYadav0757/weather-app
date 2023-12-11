const chalk = require("chalk");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log(
    chalk.red.bold("Please provide an address to get the forecast !!")
  );
} else {
  geoCode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(chalk.red.bold(error));
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(chalk.red.bold(error));
      }

      console.log(chalk.red.bold("Location :-"), chalk.blue.bold(location));
      console.log(chalk.red.bold("Forecast :-"), forecastData);
    });
  });
}
