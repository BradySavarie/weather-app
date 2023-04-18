const tempToggle = document.getElementById('temp_toggle');

export default function renderCurrentWeather(data) {
    const cityName = document.getElementById('city_name');
    const currentCondition = document.getElementById('current_condition');
    const currentTemp = document.getElementById('current_temp');
    const highTemp = document.getElementById('high_temp');
    const lowTemp = document.getElementById('low_temp');

    cityName.textContent = data.cityName;
    currentCondition.textContent = data.currentCondition;

    if (tempToggle.checked) {
        currentTemp.textContent = data.currentTempCelcius;
        highTemp.textContent = data.highTempCelcius;
        lowTemp.textContent = data.lowTempCelcius;
    } else {
        currentTemp.textContent = data.currentTempFahrenheit;
        highTemp.textContent = data.highTempFahrenheit;
        lowTemp.textContent = data.lowTempFahrenheit;
    }
}

export { renderCurrentWeather };
