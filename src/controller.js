// The code below is the beginning of the model module. Still need to configure webpack for bundling before separating into modules. Just wanted to play around with fetching from the weather api :)
import './styles.css';
import * as Model from './model';
import * as View from './view';

const locationSearchInput = document.getElementById('location_search_input');
const locationSearchBtn = document.getElementById('location_search_button');

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cityName = locationSearchInput.value;
        Model.getCurrentWeatherData(cityName);
    }
});

locationSearchBtn.addEventListener('click', () => {
    const cityName = locationSearchInput.value;
    Model.getCurrentWeatherData(cityName);
});

View.test();
