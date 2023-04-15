import './styles.scss';
import * as Model from './model';
import * as View from './view';

const locationSearchInput = document.getElementById('location_search_input');
const locationSearchBtn = document.getElementById('location_search_button');

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cityName = locationSearchInput.value;
        const currentWeatherData = Model.getWeatherData(cityName);
        currentWeatherData.then((data) => {
            View.renderCurrentWeather(data);
        });
    }
});

locationSearchBtn.addEventListener('click', () => {
    const cityName = locationSearchInput.value;
    const currentWeatherData = Model.getWeatherData(cityName);
    currentWeatherData.then((data) => {
        View.renderCurrentWeather(data);
    });
});
