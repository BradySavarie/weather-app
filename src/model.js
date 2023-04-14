const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const currentWeatherApiMethod = '/current.json';
const forecastApiMethod = '/forecast.json';

const currentLocation = 'Sudbury';

export default async function getCurrentWeatherData() {
    const responseData = await fetch(
        `${baseUrl + currentWeatherApiMethod}?key=${key}&q=${currentLocation}`
    );
    const responseDataJson = await responseData.json();
    console.log(responseDataJson);
}

export { getCurrentWeatherData };
