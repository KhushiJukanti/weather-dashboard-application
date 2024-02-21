import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeatherWidget from './Components/WeatherWidget';
import Footer from './Components/Footer';

import Navigation from './Components/Navbar';
import { useEffect } from 'react';
import UseStateDemo from './Pages/UseStateDemo';
import UseEffectdemo from './Pages/UseEffectdemo';

const App = () => {
  return (
    <div className="App">
      {/* <UseStateDemo/> */}
      <UseEffectdemo/>
      {/* <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <WeatherWidget />
          </Col>
        </Row>
      </Container>
      <Footer /> */}

      {/* use Effect */}
      {/* import {useEffect} from "react"
      const [useState,setUseState] = useState("") */}
    </div>
  );
};

export default App;
