import React from "react";
import ReactAnimatedWeather from "@bybas/weather-icons";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear_day",
    "01n": "clear_night",
    "02d": "partly_cloudy_day",
    "02n": "partly_cloudy_night",
    "03d": "partly_cloudy_day",
    "03n": "partly_cloudy_night",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rain",
    "09n": "rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "rain",
    "11n": "rain",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
