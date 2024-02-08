import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import React from 'react'
import TravelForecast from '../Pages/Travelars';
import FarmerWeatherSection from '../Pages/Farmers';
import EventPlannerSection from '../Pages/EventPlanners';
import FeedbackForm from '../Pages/FeadBack';



function WeatherWidget() {
    const [selectedForecast, setSelectedForecast] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showTravelForecast, setShowTravelForecast] = useState(false);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [showFarmerWeather, setShowFarmerWeather] = useState(false);
    const [showEventPlannerSection, setShowEventPlannerSection] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const fetchWeather = (cityName) => {
        let weatherData = {};
        switch (cityName) {
            case 'Hyderabad':
                weatherData = {
                    cityName: 'Hyderabad',
                    temperature: '28°C',
                    conditions: 'Partly Cloudy',
                    humidity: '55%',
                    wind_speed: '10 mph'

                };
                break;
            case 'Bengaluru':
                weatherData = {
                    cityName: 'Bengaluru',
                    temperature: '32°C',
                    conditions: 'sunny',
                    humidity: '60%',
                    wind_speed: '15 mph'
                };
                break;
            case 'Chennai':
                weatherData = {
                    cityName: 'Chennai',
                    temperature: '27°C',
                    conditions: 'Scattered Thunderstorms',
                    humidity: '70%',
                    wind_speed: '12 mph'
                };
                break;
            case 'Mumbai':
                weatherData = {
                    cityName: 'Mumbai',
                    temperature: '25°C',
                    conditions: 'Sunny',
                    humidity: '50%',
                    wind_speed: '9 mph'
                };
                break;
            default:
                //Default weather city not matched
                weatherData = {
                    // cityName: cityName,
                    temperature: '35°C',
                    conditions: 'Sunny',
                    humidity: '30%',
                    wind_speed: '8 mph'
                }
        }
        setSelectedForecast(weatherData)
    };

    const handleButtonClick = (cityName) => {
        fetchWeather(cityName)
    }

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchSubmit = () => {
        fetchWeather(searchTerm);
    }

    const handleTravelersButtonClick = () => {
        // setSelectedForecast(prevState => ({ ...prevState, message: 'Hi' }));
        setShowTravelForecast(true);
        setShowFarmerWeather(false);
        setShowEventPlannerSection(false);
        setShowFeedbackForm(false)
    };

    const handleFarmersButtonClick = () => {
        // setSelectedForecast(prevState => ({ ...prevState, message: 'Bye' }));
        setShowFarmerWeather(true);
        setShowTravelForecast(false);
        setShowEventPlannerSection(false);
        setShowFeedbackForm(false)
    };

    const handleEventPlannersButtonClick = () => {
        // setSelectedForecast(prevState => ({ ...prevState, message: 'Joy' }));
        setShowEventPlannerSection(true);
        setShowTravelForecast(false);
        setShowFarmerWeather(false);
        setShowFeedbackForm(false)
    };

    const handleFeedbackButtonClick = () => {
        // setSelectedForecast(prevState => ({ ...prevState, message: 'Hey' }));
        // setFeedbackMessage(message);
        setShowFeedbackForm(true);
    };

    const handleSubmitFeedback = (message) => {
        // Implement logic to submit feedback
        setFeedbackMessage(message);
      };


    return (
        <div className='container'>
            <div className='row justify-content-center mt-4'>
                <h1>Select City</h1>
            </div>
            <div className="row">
                <button onClick={() => handleButtonClick('Hyderabad')} className="btn btn-primary col-2 m-1">Hyderabad</button>
                <button onClick={() => handleButtonClick('Bengaluru')} className="btn btn-primary col-2 m-1">Bengaluru</button>
                <button onClick={() => handleButtonClick('Chennai')} className="btn btn-primary col-2 m-1">Chennai</button>
                <button onClick={() => handleButtonClick('Mumbai')} className="btn btn-primary col-2 m-1">Mumbai</button>
                <input type="text" className=" col-3 m-1" value={searchTerm} onChange={handleSearchInput} placeholder="City Name" />
                <button className=" m-1" onClick={handleSearchSubmit} style={{ width: "62px" }}>Search</button>

                {selectedForecast && (
                    <Card style={{ width: '30rem', height: '50rem', marginLeft: "400px", marginTop: '20px', backgroundColor: "darkcyan", boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)', backgroundImage: 'url("")', backgroundSize: 'cover' }}>
                        <Card.Body>
                            <Card.Title className="text-center" style={{ fontSize: '1.5rem', color: '#343a40' }}>Weather in {selectedForecast.cityName}</Card.Title>
                            <div className="text-center">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif" alt="Weather Animation" style={{ width: '150px', height: '150px', borderRadius: "20px" }} />
                            </div>
                            <Card.Text className="mt-3" style={{ fontSize: '1rem', color: '#343a40' }}>
                                <strong>Temperature:</strong> {selectedForecast.temperature}<br />
                                <strong>Conditions:</strong> {selectedForecast.conditions}<br />
                                <strong>Humidity:</strong> {selectedForecast.humidity}<br />
                                <strong>Wind Speed:</strong> {selectedForecast.wind_speed}<br />





                                <div className='d-flex justify-content-between align-items-end mt-4'>

                                    <button className='btn btn-dark' onClick={handleTravelersButtonClick}>Travelars</button>
                                    <button className='btn btn-dark' onClick={handleFarmersButtonClick}>Farmers</button>
                                    <button className='btn btn-dark' onClick={handleEventPlannersButtonClick}>EventPlanners</button>
                                    <button className='btn btn-dark' onClick={handleFeedbackButtonClick}>Feedback</button>

                                </div>
                                <p className='mt-2 text-light bg-dark'>--------Here is the User-Centric Info:---------</p> <br />
                                <strong>Message from the Weatherman: "{selectedForecast.message}"</strong><br />

                                {showTravelForecast && (
                                    <TravelForecast cityName={selectedForecast.cityName} />
                                )}
                                {showFarmerWeather && (
                                    <FarmerWeatherSection cityName={selectedForecast.cityName} />
                                )}
                                {showEventPlannerSection && (
                                    <EventPlannerSection cityName={selectedForecast.cityName} />
                                )}
                                {feedbackMessage && <p>Thank you for your feedback: {feedbackMessage}</p>}
                                {showFeedbackForm && (<FeedbackForm className='mt-2'onSubmit={handleSubmitFeedback} />)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}







            </div>

        </div>
    )
};


export default WeatherWidget;
