import { useState } from 'react';

import './find.location.form.css';

const FindLocationForm = (props) => {
    const APIKey = 'd62812e741f2464d808160454240608';

    const [location, setLocation] = useState('');
    
    const findLocation = (e) => {
        e.preventDefault();

        fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${location}&aqi=no`)
            .then(res => {
                if (!res.ok) {
                    props.changeWeatherInfoVisibility(false);
                    props.changeNotFoundVisibility(true);
                    return null;
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    const weather = data.current;
                    
                    props.changeWeatherInfo({
                        condition: weather.condition.text,
                        temp: Math.round(weather.temp_c),
                        wind: weather.wind_kph,
                        uvIndex: weather.uv,
                        feelsLike: Math.round(weather.feelslike_c)
                    });

                    props.changeNotFoundVisibility(false);
                    props.changeWeatherInfoVisibility(true);
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <form 
            onSubmit={(e) => findLocation(e)}
            className="find-location-form">
            <i className="fa-solid fa-location-dot"></i>
            <input 
                onChange={(e) => setLocation(e.target.value)}
                type="text" 
                className="location-input" 
                placeholder="Enter Your Location" />
            <button className={"find-location-btn " + (props.weatherInfoVisibility ? "find-location-btn_white" : "")}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    )
}

export default FindLocationForm;
