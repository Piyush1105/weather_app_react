import React, { useContext, useState, useEffect } from "react";
import { weatherData } from "../App";
import "../components/css/weatherforcast.css";

function WeatherForcast() {
  const [data, setData] = useState(null);
  const getData = useContext(weatherData);
  let city = getData.city;
  useEffect(() => {
    const forcastData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=2&appid=8d223e52b8b755aff6f56e2e4aba7743&units=metric&lang=en`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson);
      console.log("data2: ", data);
    };

    forcastData();
  }, [city]);

  let imgSrc = `http://openweathermap.org/img/wn/${getData.weatherIcon}@2x.png`;
  const tempUnit = "°C";
  const card = [
    {
      id: 1,
      dtime: "date-time",
      icon: imgSrc,
      title: "temperature",
      data: getData.temp,
      unit: tempUnit,
    },
    {
      id: 2,
      dtime: "date-time",
      icon: imgSrc,
      title: "temperature",
      data: getData.temp,
      unit: tempUnit,
    },
    {
      id: 3,
      dtime: "date-time",
      icon: imgSrc,
      title: "temperature",
      data: getData.temp,
      unit: tempUnit,
    },
    {
      id: 4,
      dtime: "date-time",
      icon: imgSrc,
      title: "temperature",
      data: getData.temp,
      unit: tempUnit,
    },
    {
      id: 5,
      dtime: "date-time",
      icon: imgSrc,
      title: "temperature",
      data: getData.temp,
      unit: tempUnit,
    },
  ];

  return (
    <div className="weatherforcast">
      <div className="weather-forcast-card-header">
        <h1>Weather Forcast</h1>
      </div>
      <div className="weather-forcast-card">
        {card.map(({ id, dtime, icon, title, data, unit }) => (
          <div key={id} className="forcast">
            <div className="forcast-time">{dtime}</div>
            <div className="forcast-icon">
              <img src={icon} alt="forcast-icon"></img>
            </div>
            <div className="forcast-temp">
              <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForcast;
