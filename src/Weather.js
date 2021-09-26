import React from "react";
import "./Weather.css";
import axios from "axios";
import { useState } from "react";
import Calendar from "./Calendar";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
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
    
    if(ready) {
  return (
    <div className="Weather container-fluid">
      <h1>{weatherData.city}</h1>
      <ul>
        <li> <Calendar date = {weatherData.date} /> </li>
        <li className="uppercase"> {weatherData.description} </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
          />
          <span className="temperature"> {Math.round(weatherData.temperature)} </span>
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/h </li>
          </ul>
        </div>
      </div>
      <form>
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
            <input type="submit" className="btn btn-primary" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );   
    } else{
    const apiKey = "72a6f5c8d3593367d6b1bec5268294b4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
}
    }


