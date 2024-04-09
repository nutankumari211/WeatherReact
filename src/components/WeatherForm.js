import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './WeatherForm.css';  
const WeatherForm = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity('');
  };

  return (
    <Container className="weather-form-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit} className="weather-form">
            <Form.Group controlId="formCity" className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="city-input"
                required
              />
              <Button variant="primary" type="submit" className="submit-button">
                 <i className="bi bi-search"></i> 
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherForm;
