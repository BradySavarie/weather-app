/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
// The code below is the beginning of the model module. Still need to configure webpack for bundling before separating into modules. Just wanted to play around with fetching from the weather api :)

const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const currentWeatherApiMethod = '/current.json';
const forecastApiMethod = '/forecast.json';

const currentLocation = 'Sudbury';

async function getCurrentWeatherData() {
    const responseData = await fetch(
        `${baseUrl + currentWeatherApiMethod}?key=${key}&q=${currentLocation}`
    );
    const responseDataJson = await responseData.json();
    console.log(responseDataJson);
}

getCurrentWeatherData();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQyxPQUFPLElBQUksS0FBSyxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBjb2RlIGJlbG93IGlzIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vZGVsIG1vZHVsZS4gU3RpbGwgbmVlZCB0byBjb25maWd1cmUgd2VicGFjayBmb3IgYnVuZGxpbmcgYmVmb3JlIHNlcGFyYXRpbmcgaW50byBtb2R1bGVzLiBKdXN0IHdhbnRlZCB0byBwbGF5IGFyb3VuZCB3aXRoIGZldGNoaW5nIGZyb20gdGhlIHdlYXRoZXIgYXBpIDopXG5cbmNvbnN0IGtleSA9ICc2NTY1MTM3NDAzY2U0MTE2YWYzMjA1MTQ1MjMwOTA0JztcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MSc7XG5jb25zdCBjdXJyZW50V2VhdGhlckFwaU1ldGhvZCA9ICcvY3VycmVudC5qc29uJztcbmNvbnN0IGZvcmVjYXN0QXBpTWV0aG9kID0gJy9mb3JlY2FzdC5qc29uJztcblxuY29uc3QgY3VycmVudExvY2F0aW9uID0gJ1N1ZGJ1cnknO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckRhdGEoKSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke2Jhc2VVcmwgKyBjdXJyZW50V2VhdGhlckFwaU1ldGhvZH0/a2V5PSR7a2V5fSZxPSR7Y3VycmVudExvY2F0aW9ufWBcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YUpzb24gPSBhd2FpdCByZXNwb25zZURhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YUpzb24pO1xufVxuXG5nZXRDdXJyZW50V2VhdGhlckRhdGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==