// The code below is the beginning of the model module. Still need to configure webpack for bundling before separating into modules. Just wanted to play around with fetching from the weather api :)

const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const currentWeatherApiMethod = '/current.json';
const forecastApiMethod = '/forecast.json';

let currentLocation = 'Sudbury';

async function getCurrentWeatherData() {
    const responseData = await fetch(
        baseUrl +
            currentWeatherApiMethod +
            '?key=' +
            key +
            '&q=' +
            currentLocation
    );
    const responseDataJson = await responseData.json();
}

getCurrentWeatherData();
