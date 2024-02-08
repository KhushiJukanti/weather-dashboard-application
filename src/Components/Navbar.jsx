import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar className='container' bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Weather Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? 'show' : ''}`}>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
            {/* Add more Nav.Link components as needed */}
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Navigation;
