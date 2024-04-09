import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';
import ErrorCard from './components/ErrorCard';
import CityManager from './components/CityManager';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);

  const getWeather = async (city) => {
    try {
      const apiKey = '28b0821d9cf17515a70751057ae9d99d';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;
      
      console.log('API URL:', apiUrl); // Log API URL
      
      const response = await axios.get(apiUrl);
      
      console.log('API Response:', response.data); // Log API response
      
      if (response.data.cod === 200) {
        setWeatherData(response.data);
        setCities([...cities, response.data.name]);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error); // Log error
      setError('Error fetching data');
    }
  };
  
  const removeCity = (index) => {
    const newCities = [...cities];
    newCities.splice(index, 1);
    setCities(newCities);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Weather App</h1>
      <WeatherForm getWeather={getWeather} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {error && <ErrorCard message={error} />}
      <CityManager cities={cities} removeCity={removeCity} />
    </div>
  );
};

export default App;
