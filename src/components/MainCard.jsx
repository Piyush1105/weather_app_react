import React, { useContext } from "react";
import "./css/maincard.css";
// import { completeData } from "./Navbar";
// import { weatherData } from "./Navbar";

import { weatherData } from "../App";

function MainCard() {
  const getData = useContext(weatherData);
  let imgSrc = `http://openweathermap.org/img/wn/${getData.weatherIcon}@2x.png`;
  //   const data = useContext(weatherData);
  //   let allData = [data];
  //   console.log(allData);
  // console.log(getData);
  // switch (getData.weatherMain) {
  //   case "Clouds":
  //     imgSrc = ;
  //     break;

  //   default:
  //     imgSrc = "";
  // }
  return (
    <div className="main-card">
      <div className="main-card-head">
        <h2>CURRENT WEATHER</h2>
        {/* <h4>TIME</h4> */}
      </div>
      <div className="main-card-temp">
        <div className="current-temp">
          <img alt="weather-type" src={imgSrc}></img>
          <h1>{getData.temp}°C </h1>
        </div>
        <div className="main-card-desc">
          {/* <h3>{getData.weatherMain}</h3> */}
          <h3>{getData.weatherDesc}</h3>
          <h3>FEELS LIKE {getData.tempFeelsLike}°</h3>
        </div>
      </div>
      <div className="main-card-desc-line">
        <h2>The high will be {getData.maxTemp}°</h2>
      </div>
      <div className="variables"></div>
    </div>
  );
}

export default MainCard;
