// WeatherCard.js

import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ weatherData }) => {
  
  //  a function to get weather condition
  const getWeatherCondition = () => {
    const weather = weatherData.weather[0].main.toLowerCase();
    
    if (weather === 'rain') return 'rainy';
    if (weather === 'clouds') return 'cloudy';
    if (weather === 'clear') return 'clear';
    return '';
  };

  //  a function to get temperature range
  const getTemperatureRange = () => {
    const temp = weatherData.main.temp;
    
    if (temp < 10) return 'cold';
    if (temp >= 10 && temp <= 30) return 'moderate';
    if (temp > 30) return 'hot';
    return '';
  };

  const weatherConditionClass = getWeatherCondition();
  const temperatureRangeClass = getTemperatureRange();

  return (
    <Card className={`weather-card ${weatherConditionClass} ${temperatureRangeClass}`}>
      <Card.Body>
        <Card.Title>{weatherData.name}</Card.Title>
        <Card.Text>Temperature: {weatherData.main.temp}°C</Card.Text>
        <Card.Text>Weather: {weatherData.weather[0].description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
