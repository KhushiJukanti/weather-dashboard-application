import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeatherWidget from './Components/WeatherWidget';
import Footer from './Components/Footer';

import Navigation from './Components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <WeatherWidget />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
