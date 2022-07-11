import React, { useContext } from "react";
// import axios from "axios";
import { getLocation } from "../App";
import "./css/navbar.css";

// const navData = createContext();

function Navbar() {
  const sendLocation = useContext(getLocation);
  //   const [location, setLocation] = useState();
  //   const [data, setData] = useState([]);
  // const [sendCity, setSendCity] = useState("");
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2e1be1a7a6727d9706cb3f805da52d90&units=metric`;
  // const handleChange = () => {};
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      // setSendCity(e.target.value);
      sendLocation.setLocation(e.target.value);
      console.log(sendLocation.setLocation(e.target.value));
    }
    sendLocation.setLocation("");
  };

  return (
    <div className="navbar-container nav">
      <div>
        <h1 className="nav-head">Weather App</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Enter a city"
          onChange={(e) => sendLocation.setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
    </div>
  );
}

export default Navbar;
// export { navData };
