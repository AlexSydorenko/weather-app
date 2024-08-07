import './weather.info.css';

const WeatherInfo = (props) => {
    const { weather } = props;

    return (
        <div className="weather-info-wrapper innerContentScale">
            <div className="weather-main-data">
                <img src={`./img/${weather.condition}.png`} alt="partly_cloudy" />
                <p className="weather-descr">{weather.condition}</p>
                <h1>{weather.temp}°</h1>
            </div>
            
            <div className="weather-additional-data">
                <div className="weather-additional-data__item weather-additional-data__item_wind">
                    <h4>Wind</h4>
                    <img src="./img/wind.png" alt="Wind" />
                    <p>{weather.wind} km/h</p>
                </div>
                <div className="weather-additional-data__item weather-additional-data__item_uv-index">
                    <h4>UV index</h4>
                    <img src="./img/uv-index.png" alt="UV index" />
                    <p>{weather.uvIndex}</p>
                </div>
                <div className="weather-additional-data__item weather-additional-data__item_feels-like">
                    <h4>Feels Like</h4>
                    <img src="./img/feels-like.png" alt="Feels like" />
                    <p>{weather.feelsLike}°</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;