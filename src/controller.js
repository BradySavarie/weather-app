// The code below is the beginning of the model module. Still need to configure webpack for bundling before separating into modules. Just wanted to play around with fetching from the weather api :)
import './styles.css';
import * as Model from './model';
import * as View from './view';

Model.getCurrentWeatherData();
View.test();
