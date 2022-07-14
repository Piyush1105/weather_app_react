import React, { useEffect, useState, createContext } from "react";
// import Navbar from "./components/Navbar";
import "./app.css";
import MainCard from "./components/MainCard";
// import HistoryCard from "./components/HistoryCard";
import "./components/css/navbar.css";
// import { useGeolocated } from "react-geolocated";
import { publicIpv4 } from "public-ip";
import WeatherForcast from "./components/WeatherForcast";

//export all api data of current day
const weatherData = createContext();
// var geolocation = require("geolocation");

function App() {
  const [data, setData] = useState(null);
  // const [data2, setData2] = useState(null);
  const [location, setLocation] = useState("");
  const [navPlaceholder, setNavPlaceholder] = useState("Enter a city");
  // const [longitude, setLongitude] = useState(null);
  // const [latitude, setLatitude] = useState(null);
  const [found, setFound] = useState(false);
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [tempFeelsLike, setTempFeelsLike] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherMain, setWeatherMain] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [ip, setIp] = useState(null);

  useEffect(() => {
    //getting IP address
    const getData = async () => {
      const result = await publicIpv4();
      console.log("result IP: ", result);
      setIp(result);
    };

    //get location from geolocation db

    // const getLocation = async () => {
    //   const url = `https://geolocation-db.com/jsonp/${ip}`;
    //   const response = await fetch(url);
    //   const resJson = await response.json();
    //   console.log("response: ", response);
    //   setLocation(resJson.city);
    //   console.log("location: ", location);
    // };

    //getting geolocation using IP address
    const autoGetLocation = async () => {
      const url = `http://api.ipapi.com/api/${ip}?access_key=d99f14dd9289dac0e27263e32cd94f5b`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log("response: ", response);
      setLocation(resJson.city);
    };

    getData();
    // getLocation();
    autoGetLocation();

    // geolocation.getCurrentPosition((err, position) => {
    //   if (err) throw err;
    //   console.log(position);
    //   setLongitude(position.coords.longitude);
    //   setLatitude(position.coords.latitude);
    // });
  }, [ip]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2e1be1a7a6727d9706cb3f805da52d90&units=metric&lang=en`;
      // const url = `https://api.openweathermap.org/data/2.5/onecall?q=${location}&exclude=minutely,hourly,alerts&appid=8d223e52b8b755aff6f56e2e4aba7743&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson);

      setTemp(resJson.main.temp.toFixed());
      setFound(resJson.cod);
      setCity(resJson.name);
      setCountry(resJson.sys.country);
      setMinTemp(resJson.main.temp_min.toFixed());
      setMaxTemp(resJson.main.temp_max.toFixed());
      setPressure(resJson.main.pressure);
      setHumidity(resJson.main.humidity);
      setWeatherMain(resJson.weather[0].main);
      setWeatherDesc(resJson.weather[0].description);
      setWeatherIcon(resJson.weather[0].icon);
      setTempFeelsLike(resJson.main.feels_like.toFixed());
      console.log("location: ", location);
    };

    fetchApi();
  }, [location, found]);

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      e.preventDefault();
      setLocation(e.target.value);
    }
    setNavPlaceholder("Enter a city");
  };

  return (
    //main design starts
    <div className="App">
      {found === 404 ? (
        <p>No Data Found</p>
      ) : (
        <weatherData.Provider
          value={{
            data,
            temp,
            city,
            minTemp,
            maxTemp,
            tempFeelsLike,
            weatherMain,
            weatherDesc,
            weatherIcon,
            pressure,
            humidity,
          }}
        >
          <div className="app-container">
            {/* <Navbar /> */}
            <div className="navbar-container">
              <h1 className="nav-head">
                {city}, {country}
              </h1>
              {/* <img src={countryFlag} alt="country Flag" /> */}
              <input
                className="search-input"
                type="text"
                placeholder={navPlaceholder}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                onKeyPress={searchLocation}
              />
            </div>

            <div className="main-container">
              <MainCard />
            </div>
            <div className="forcast-container">
              <WeatherForcast />
            </div>
          </div>
        </weatherData.Provider>
      )}
    </div>
  );
}

export default App;
export { weatherData };
