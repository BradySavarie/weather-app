import './styles.scss';
import * as Model from './model';
import * as View from './view';

const locationSearchForm = document.getElementById('location_search_form');

locationSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = e.target[0].value;
    const currentWeatherData = Model.getWeatherData(cityName);
    currentWeatherData.then((data) => {
        View.renderCurrentWeather(data);
    });
});
