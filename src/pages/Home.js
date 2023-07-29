import "../styles/Home.css";
import background from "../images/background.jpg";
import { useContext } from "react";
import WeatherContext from "../WeatherContext";
const Home = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log("hello");

  if (!weatherData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const cityName = weatherData.name;
  const temp = weatherData.main.temp;
  const feels_like = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const wind_speed = weatherData.wind.speed;

  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="loc-temp">
        <h1>{cityName}</h1>
        <h2>{temp}°F</h2>
      </div>
      <div className="extra-det">
        <h2>Feels like: {feels_like}</h2>
        <h2>Humidity: {humidity}</h2>
        <h2>Wind Speed: {wind_speed}</h2>
      </div>
    </div>
  );
};

export default Home;
