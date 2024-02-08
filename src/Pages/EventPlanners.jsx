import React, { useState, useEffect } from 'react';

const EventPlannerSection = ({ cityName }) => {
  // Define state variables to store weather data and loading state
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to simulate fetching weather data
  const fetchWeatherData = () => {
    // Simulate loading delay
    setTimeout(() => {
      const mockData = {
        hourly: [
          { time: '12:00 PM', precipitation: '2.5' },
          { time: '01:00 PM', precipitation: '3.0' },
          { time: '02:00 PM', precipitation: '1.8' },
          // Add more mock hourly data as needed
        ],
        alerts: [
          { id: 1, description: 'Heavy rain expected' },
          { id: 2, description: 'High wind advisory' },
          // Add more mock alert data as needed
        ],
      };
      setWeatherData(mockData);
      setIsLoading(false);
    }, 2000); // Simulate loading delay of 2 seconds
  };

  // useEffect hook to fetch weather data when component mounts or cityName changes
  useEffect(() => {
    fetchWeatherData();
  }, [cityName]);

  // JSX markup to display weather information
  return (
    <div>
      <h2>Event Planner Weather Forecast for {cityName}</h2>
      {isLoading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div>
          <p>Hour-by-hour precipitation forecast:</p>
          {/* Display hour-by-hour precipitation forecast */}
          <ul>
            {weatherData.hourly.map(hour => (
              <li key={hour.time}>{hour.time}: {hour.precipitation} mm</li>
            ))}
          </ul>
          <p>Alerts for potential disruptions:</p>
          {/* Display alerts for potential disruptions */}
          <ul>
            {weatherData.alerts.map(alert => (
              <li key={alert.id}>{alert.description}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No weather data available for {cityName}</p>
      )}
    </div>
  );
};

export default EventPlannerSection;
