import './styles.scss';
import * as Model from './model';
import * as View from './view';

const locationSearchForm = document.getElementById('location_search_form');
const searchInput = document.getElementById('search');
const tempToggle = document.getElementById('temp_toggle');

locationSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = e.target[0].value;
    const currentWeatherData = Model.getWeatherData(cityName);
    currentWeatherData.then((data) => {
        View.renderCurrentWeather(data);
    });
});

tempToggle.addEventListener('change', () => {
    const cityName = searchInput.value;
    const currentWeatherData = Model.getWeatherData(cityName);
    currentWeatherData.then((data) => {
        View.renderCurrentWeather(data);
    });
});
