import { useState } from 'react';
import FindLocationForm from './components/find-location-form/find.location.from';
import WeatherInfo from './components/weather-info/weather.info';
import NotFound from './components/not-found/not.found';

import './App.css';

function App() {
  const [weatherInfoVisibility, setWeatherInfoVisibility] = useState(false);
  const [notFoundVisibility, setNotFoundVisibility] = useState(false);

  const [weather, setWeather] = useState({
    condition: "",
    temp: 0,
    wind: 0,
    uvIndex: 0,
    feelsLike: 0,
  });

  return (
    <div className="App">
      <div className={"container " +
        (weatherInfoVisibility ? "container-weather-info" : "") + 
        (notFoundVisibility ? "container-not-found" : "")}>
        <FindLocationForm
          weatherInfoVisibility={weatherInfoVisibility}
          changeWeatherInfoVisibility={(param) => setWeatherInfoVisibility(param)}
          changeNotFoundVisibility={(param) => setNotFoundVisibility(param)}
          changeWeatherInfo={(weatherInfo) => setWeather(weatherInfo)} />
        {
          weatherInfoVisibility ? <WeatherInfo weather={weather} className="fadeIn" /> : ""
        }
        {
          notFoundVisibility ? <NotFound className="fadeIn" /> : ""
        }
      </div>
    </div>
  );
}

export default App;
