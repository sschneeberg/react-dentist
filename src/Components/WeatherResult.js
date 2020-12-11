function WeatherResult(props) {
    console.log(props);
    let temp = Math.round((props.weather.main.temp - 273) * (9 / 5) + 32);
    let feelsLike = Math.round(
        (props.weather.main.feels_like - 273) * (9 / 5) + 32
    );

    return (
        <div className="result">
            <h3>Weather for: {props.weather.name}</h3>
            <p>{props.weather.weather[0].description}</p>
            <p>
                Currently {temp}ºF, Feels Like {feelsLike}ºF{' '}
            </p>
            <p>{props.weather.main.humidity}% Humidity</p>
        </div>
    );
}

export default WeatherResult;
