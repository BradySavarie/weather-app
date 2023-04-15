const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const forecastApiMethod = '/forecast.json';

class LocationData {
    constructor(locationData) {
        this.cityName = locationData.location.name;
        this.currentCondition = locationData.current.condition.text;
        this.currentTempCelcius = Math.round(locationData.current.temp_c);
        this.currentTempFahrenheit = Math.round(locationData.current.temp_f);
        this.highTempCelcius = Math.round(
            locationData.forecast.forecastday[0].day.maxtemp_c
        );
        this.highTempFahrenheit = Math.round(
            locationData.forecast.forecastday[0].day.maxtemp_f
        );
        this.lowTempCelcius = Math.round(
            locationData.forecast.forecastday[0].day.mintemp_c
        );
        this.lowTempFahrenheit = Math.round(
            locationData.forecast.forecastday[0].day.mintemp_f
        );
    }
}

export default async function getWeatherData(cityName) {
    const responseData = await fetch(
        `${baseUrl + forecastApiMethod}?key=${key}&q=${cityName}&days=7`
    );
    const responseDataJson = await responseData.json();
    console.log(responseDataJson);
    const currentLocation = new LocationData(responseDataJson);
    console.log(currentLocation);
}

export { getWeatherData };
