const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const currentWeatherApiMethod = '/current.json';
const forecastApiMethod = '/forecast.json';

let currentLocation = 'Sudbury';

export default async function getCurrentWeatherData(cityName) {
    currentLocation = cityName;
    const responseData = await fetch(
        `${baseUrl + currentWeatherApiMethod}?key=${key}&q=${currentLocation}`
    );
    const responseDataJson = await responseData.json();
    console.log(responseDataJson);
}

export { getCurrentWeatherData };
