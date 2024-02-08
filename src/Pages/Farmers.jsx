import React from 'react';

const FarmerWeatherSection = ({ cityName }) => {
  // Mock weather data for demonstration
  const mockWeatherData = {
    Hyderabad: {
      temperature: '28°C',
      humidity: '55%',
      precipitation: '10%',
    },
    Bengaluru: {
      temperature: '32°C',
      humidity: '60%',
      precipitation: '15%',
    },
    Chennai: {
      temperature: '27°C',
      humidity: '70%',
      precipitation: '20%',
    },
    Mumbai: {
      temperature: '25°C',
      humidity: '50%',
      precipitation: '5%',
    },
  };

  // Retrieve weather data for the specified cityName
  const weatherData = mockWeatherData[cityName];

  // JSX markup to display weather information
  return (
    <div>
      <h2>Crop-Specific Weather Information for {cityName}</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <p>Precipitation: {weatherData.precipitation}</p>
          {/* Add more crop-specific weather information as needed */}
        </div>
      ) : (
        <p>No weather data available for {cityName}</p>
      )}
    </div>
  );
};

export default FarmerWeatherSection;
