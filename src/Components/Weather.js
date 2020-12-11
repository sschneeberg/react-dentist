import React, { useState } from 'react';
import axios from 'axios';

import WeatherResult from './WeatherResult';

function Weather() {
    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ZIP', zip);
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`;
        axios
            .get(url)
            .then((result) => {
                setWeather(result.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <h1>Find weather in your area in the United States</h1>
                {weather ? <WeatherResult weather={weather} /> : null}
                <label htmlFor="zip">Enter your Zip Code</label>
                <input
                    type="text"
                    name="zip"
                    id="zip"
                    onChange={(e) => {
                        setZip(e.target.value);
                    }}
                    placeholder={zip}
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default Weather;
