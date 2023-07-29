import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import WeatherContext from "./WeatherContext";
import { API_KEY } from "./helpers/API";

function App() {
  const defaultWeather = {
    name: "",
    main: { temp: null, feels_like: null, humidity: null },
    wind: { speed: null }
  };
  const [location, setLocation] = useState("Amman");
  const [weatherData, setWeatherData] = useState(defaultWeather);

  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=${API_KEY}`;

  return (
    <div className="App">
      <Router>
        <WeatherContext.Provider
          value={{ weatherData, setWeatherData, location, setLocation }}
        >
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </WeatherContext.Provider>
      </Router>
    </div>
  );
}

export default App;
