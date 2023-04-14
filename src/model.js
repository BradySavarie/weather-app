const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const forecastApiMethod = '/forecast.json';

let currentLocation = 'Sudbury';

export default async function getWeatherData(cityName) {
    currentLocation = cityName;
    const responseData = await fetch(
        `${baseUrl + forecastApiMethod}?key=${key}&q=${currentLocation}&days=7`
    );
    const responseDataJson = await responseData.json();
    console.log(responseDataJson);
}

export { getWeatherData };
