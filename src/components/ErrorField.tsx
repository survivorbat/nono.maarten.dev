import * as React from 'react';
import './ErrorField.css';

interface ErrorFieldProps {
  message: string;
}

function ErrorField({ message }: ErrorFieldProps) {
  return <p className="error-field">{message}</p>;
}

export default ErrorField;
