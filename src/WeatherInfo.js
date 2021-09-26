import React from "react";
import Calendar from "./Calendar";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li>
          {" "}
          <Calendar date={props.info.date} />{" "}
        </li>
        <li className="uppercase"> {props.info.description} </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.info.iconUrl} alt={props.info.description} />
          <span className="temperature">
            {" "}
            {Math.round(props.info.temperature)}{" "}
          </span>
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
