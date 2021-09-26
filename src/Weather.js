import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container-fluid">
      <h1>Prague</h1>
      <ul>
        <li> Sunday 05:40</li>
        <li> Partly Cloudy </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <span className="temperature"> 6 </span>
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: </li>
            <li> Humidity: </li>
            <li>Wind: </li>
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
}
