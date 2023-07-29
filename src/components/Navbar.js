import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import "../styles/Navbar.css";
import { useContext, useState } from "react";
import { API_KEY } from "../helpers/API";
import WeatherContext from "../WeatherContext";

const Navbar = () => {
  // const [location, setLocation] = useState("Amman");
  // const [weatherData, setWeatherData] = useState(null);
  const { setLocation, setWeatherData } = useContext(WeatherContext);
  const [searchInput, setSearchInput] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}`;

  const searchLoc = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
    setLocation(searchInput);
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <form onSubmit={searchLoc}>
        <input
          type="search"
          placeholder="Search city"
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="links">
        <Link to="/" element={<Home />}>
          Home
        </Link>
        <Link to="/about" element={<About />}>
          About
        </Link>

        <Link to="/contact" element={<Contact />}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
