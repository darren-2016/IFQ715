import { useEffect, useState } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Location from "./Location";
import Login from "./User/Login";
import Register from "./User/Register";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import{ getCurrentWeatherByQuery } from "./api";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <BrowserRouter>
      <div className="d-flex flex-column bg-light" id="wrapper">
        <Header isLoggedIn={isLoggedIn} />
        <Container fluid className="pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route 
              path="/login" 
              element={<Login setIsLoggedIn={setIsLoggedIn} 
            />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />      
      </div>
    </BrowserRouter>
  );
}


function App2() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let city = 'Brisbane';
  useEffect(() => {
    setLoading(true);
    getCurrentWeatherByQuery(city)
      .then((weather) => setWeather(weather))
      .catch(error => setError(error.message))
      .finally(setLoading(false))
  }, [city]);

  return (
    <div className="App">
      <h1>Weather</h1>
      {/* <button disabled={userId === 1} onClick={() => setUserId(userId - 1)}>
        Previous
      </button>
      <button disabled={!userId} onClick={() => setUserId(userId + 1)}>
        Next
      </button> */}
      {weather ? (
        <div>
          <ul>
            <li>City: {city}</li>
            <li>Region: {weather.location.region}</li>
            <li>Longitude: {weather.location.lon}</li>
            <li>Latitude: {weather.location.lat}</li>
            <li>Temperature: {weather.current.temp_c}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// export default App;
