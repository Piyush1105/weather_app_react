import React, { useContext } from "react";
import "./css/maincard.css";
import Backgroundimage from "./assets/background-img.jpg";
import Sunny from "./assets/sunny.jpg";
import Cloudy from "./assets/cloudy.jpg";
import Rainy from "./assets/rainy.jpg";
import Snow from "./assets/snow.jpg";
import Mist from "./assets/mist.jpg";
import Thunder from "./assets/thunder.jpg";
// import { completeData } from "./Navbar";
// import { weatherData } from "./Navbar";

import { weatherData } from "../App";

function MainCard() {
  const getData = useContext(weatherData);
  let imgUrl = "";
  switch (getData.weatherDesc) {
    case "clear sky":
      imgUrl = Sunny;
      break;
    case "few clouds":
    case "overcast clouds":
    case "broken clouds":
      imgUrl = Cloudy;
      break;
    case "drizzle":
    case "rain":
    case "light rain":
    case "moderate rain":
    case "shower rain":
      imgUrl = Rainy;
      break;
    case "thunderstorm":
      imgUrl = Thunder;
      break;
    case "snow":
      imgUrl = Snow;
      break;
    case "mist":
      imgUrl = Mist;
      break;
    default:
      imgUrl = Backgroundimage;
  }
  let bgImgStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center",

    /* background-image: url('https://i.imgur.com/lL6tQfy.png'), */
  };
  // let bgImg = "";

  let imgSrc = `http://openweathermap.org/img/wn/${getData.weatherIcon}@4x.png`;
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
  const tempUnit = "°C";
  const card = [
    {
      id: 1,
      icon: "⬆️",
      title: "max",
      data: getData.maxTemp,
      unit: tempUnit,
    },
    {
      id: 2,
      icon: "⬇️",
      title: "min",
      data: getData.minTemp,
      unit: tempUnit,
    },
    {
      id: 3,
      icon: "🙂",
      title: "feels like",
      data: getData.tempFeelsLike,
      unit: tempUnit,
    },
    {
      id: 4,
      icon: "🗜",
      title: "pressure",
      data: getData.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: "💧",
      title: "humidity",
      data: getData.humidity,
      unit: "%",
    },
  ];

  return (
    <div className="main-card">
      <div className="bg-image" style={bgImgStyle}></div>
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
          {/* <h3>FEELS LIKE {getData.tempFeelsLike}°</h3> */}
        </div>
      </div>
      {/* <div className="main-card-desc-line"> */}
      {/* <h2>The high will be {getData.maxTemp}°</h2> */}
      {/* </div> */}
      <div className="variables">
        {card.map(({ id, icon, title, data, unit }) => (
          <div key={id} className="variable-card">
            <div className="variable-description_card-icon">
              {icon}
              <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCard;
