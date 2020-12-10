import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = {
  key: "8d4473d8a435911b0fb19182f26ff2f8",
  base: "https://api.openweathermap.org/data/2.5/"
}
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=8d4473d8a435911b0fb19182f26ff2f8';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setWeather(response.data);
        setQuery('');
      });
    }
  }

  function capitalize_Words(str)
  {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.weather[0].main === 'Rain') ? 'app rain' : 
        (weather.weather[0].main === 'Drizzle') ? 'app drizzle' : 
        (weather.weather[0].main === 'Thunder') ? 'app thunder' :
        (weather.weather[0].main === 'Clear') ? 'app clear' :
        (weather.weather[0].main === 'Snow') ? 'app snow' :
        (weather.weather[0].main === 'Clouds') ? 'app clouds'  : 'app'):  'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              <img 
                id="weatherIcon" 
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt="Current Weather Icon"
              />
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">
              {capitalize_Words(weather.weather[0].description)}
            </div>
            <div className="minAndMax">
              Min: {weather.main.temp_min}°C&nbsp;&nbsp;&nbsp;
              Max: {weather.main.temp_max}°C&nbsp;&nbsp;&nbsp;
              Humidty: {weather.main.humidity}%&nbsp;&nbsp;&nbsp;
              Wind: {weather.wind.speed} km/h&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
