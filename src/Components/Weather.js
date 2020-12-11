import React, { useState } from 'react';
import axios from 'axios';

import WeatherResult from './WeatherResult';

function Weather() {
    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ZIP', zip);
        setLoading(true);
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`;
        axios
            .get(url)
            .then((result) => {
                setWeather(result.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <h1>Find weather in your area in the United States</h1>
                {loading ? <h3>Loading Results . . .</h3> : null}
                {weather && !loading ? (
                    <WeatherResult weather={weather} />
                ) : null}
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
