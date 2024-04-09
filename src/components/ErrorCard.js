import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorCard = ({ message }) => {
  return <Alert variant="danger">{message}</Alert>;
};

export default ErrorCard;
