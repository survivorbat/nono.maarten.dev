import * as React from 'react';
import './SuccessField.css';

interface SuccessFieldProps {
  message: string;
}

function SuccessField({ message }: SuccessFieldProps) {
  return <p className="success-field">{message}</p>;
}

export default SuccessField;
