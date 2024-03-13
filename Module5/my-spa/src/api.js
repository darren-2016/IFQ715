
import { useEffect, useState } from "react";


// I mimic the response from an API that we'll look at later!
const fakeCity = {
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1661740986,
      localtime: "2022-08-29 3:43",
    },
    current: {
      last_updated_epoch: 1661740200,
      last_updated: "2022-08-29 03:30",
      temp_c: 16.0,
      temp_f: 60.8,
      is_day: 0,
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 5.6,
      wind_kph: 9.0,
      wind_degree: 40,
      wind_dir: "NE",
      pressure_mb: 1023.0,
      pressure_in: 30.21,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 77,
      cloud: 0,
      feelslike_c: 16.0,
      feelslike_f: 60.8,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 10.5,
      gust_kph: 16.9,
    },
   };

   export function useWeather4(city) {
    return fakeCity;
   }

   export function useWeather(city) {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      getCurrentWeatherByQuery(city)
      .then((weather) => {
        setWeather(weather);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, [city]);

    return {
      loading: loading,
      weather: weather,
      error: error,
    };
    // return fakeCity;
   }

   export function getCurrentWeatherByQuery(city) {
    const API_KEY = "889c4757807b42ec98a21636231510";
    const url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${API_KEY}`;

    return fetch(url)
      .then((res) => res.json())
      //.then((res) => res.data);
   }

  //  export function useWeather(city) {
  //   const [loading, setLoading] = useState(false);
  //   const [weather, setWeather] = useState();
  //   const [error, setError] = useState('');
  //   // const [error, setError] = useState(null);

  //   // useEffect(() => {
  //   //   setLoading(true);
  //   //   getCurrentWeatherByQuery(city)
  //   //   .then((weather) => {
  //   //     setWeather(weather);
  //   //     console.log(weather);
  //   //   })
  //   //   .catch((error) => {
  //   //     setError(error);
  //   //   })
  //   //   .finally(() => {
  //   //     setLoading(false);
  //   //   });
  //   // }, [city]);

  //   useEffect(() => {
  //     console.log('USEEFFECT');
  //     setLoading(true);
  //     getCurrentWeatherByQuery(city)
  //     .then(data => {
  //       setWeather(data);
  //       // console.log(data);
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  //   }, [city]);


  //   return {
  //     loading: loading,
  //     weather: weather,
  //     error: error,
  //   };

  //   // return fakeCity;
  //  }
   

   
// function WeatherDisplay() {
export function useWeather3(query) {
  const [weather, setWeather] = useState(null); // Stores weather data
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store any errors

  // Replace with your desired location
  // const query = city;

  let city = 'Brisbane';
  useEffect(() => {
    getCurrentWeatherByQuery(city).then((weather) => setWeather(weather));
  }, [city]);

  return {
    // loading: isLoading,
    weather: weather,
    // error: error,
  };
}


// function WeatherDisplay() {
export function useWeather2(city) {
    const [weatherData, setWeatherData] = useState(null); // Stores weather data
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Store any errors
  
    // Replace with your desired location
    const query = city;
  
  const fetchWeather = () => {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    const API_KEY = "889c4757807b42ec98a21636231510";
    const url = `http://api.weatherapi.com/v1/current.json?q=${query}&key=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setError(error); // Store error for display
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false regardless of success/failure
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [query]); // Re-fetch on query change

  return {
    loading: isLoading,
    weather: weatherData,
    error: error,
  };

  // return (
  //   <div>
  //     {isLoading ? (
  //       <p>Loading weather data...</p>
  //     ) : error ? (
  //       <p>Error: {error.message}</p>
  //     ) : weatherData ? (
  //       <div>
  //         <h2>Weather in {weatherData.location.name}</h2>
  //         <p>Temperature: {weatherData.current.temp_c}°C</p>
  //         {/* Access other weather data properties as needed */}
  //       </div>
  //     ) : (
  //       <p>No weather data available.</p>
  //     )}
  //   </div>
  // );
}