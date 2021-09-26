import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-ctrl"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h1>Prague</h1>
      <ul>
        <li> Sunday 05:40</li>
        <li> Sunny </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="/" alt="Sunny" />6 C
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: </li>
            <li> Humidity: </li>
            <li>Wind: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
