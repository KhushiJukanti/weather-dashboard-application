import React from 'react';

const TravelForecast = ({ cityName }) => {
  // Mock travel-friendly weather insights for demonstration
  const mockTravelData = {
    Hyderabad: {
      airportConditions: 'Normal',
      travelAdvisories: 'Enjoy  your trip!',
      temperature: '25°C'
    },
    Bengaluru: {
      airportConditions: 'Sunny',
      travelAdvisories: 'Be aware  of heavy traffic. Enjoy the rest of your trip!',
      temperature: '30°C'
    },
    Chennai: {
      airportConditions: 'Rainy',
      travelAdvisories: 'Please bring raincoats be Careful',
      temperature: '18°C'
    },
    Mumbai: {
      airportConditions: 'whirl pool',
      travelAdvisories: 'Its looks like Annoying',
      temperature: '40°C'
    },
  };

  // Retrieve travel-friendly weather insights for the specified cityName
  const travelData = mockTravelData[cityName];

  // JSX markup to display travel-friendly weather insights
  return (
    <div>
      <h2>Travel-Friendly Weather Insights for {cityName}</h2>
      {travelData ? (
        <div>
          <p>Airport Conditions: {travelData.airportConditions}</p>
          <p>Travel Advisories: {travelData.travelAdvisories}</p>
          <p>Tempareture: {travelData.temperature}</p>
          {/* Add more travel-friendly weather insights as needed */}
        </div>
      ) : (
        <p>No travel-friendly weather insights available for {cityName}</p>
      )}
    </div>
  );
};

export default TravelForecast;
