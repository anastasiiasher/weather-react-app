import React from "react";
import "./Weather.css";
import axios from "axios";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setReady(true);
        setWeatherData([
          {
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
          },
        ]);
    }
    function search() {
      const apiKey = "72a6f5c8d3593367d6b1bec5268294b4";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCity(event) {
      setCity(event.target.value);
    }
    if (weatherData.ready) {
      return (
        <div className="Weather container-fluid">
          <h1> {weatherData.city} </h1>
          <WeatherInfo info="{WeatherData}" />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-ctrl"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                  onChange={handleCity}
                />
              </div>
            </div>
          </form>
        </div>
      );
    } else {
        search();
      return "Loading...";
    }
    }


