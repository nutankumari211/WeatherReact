import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const CityManager = ({ cities, removeCity }) => {
  return (
    <div>
      <h2>City Manager</h2>
      <ListGroup>
        {cities.map((city, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {city}
            <Button 
              variant="danger" 
              size="sm" 
              onClick={() => removeCity(index)}
              className="delete-button"
            >
              <i className="bi bi-trash"></i> {/* Bootstrap delete icon */}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CityManager;
