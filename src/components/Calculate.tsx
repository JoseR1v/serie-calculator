import React from 'react';
import { Serie } from '../utils/Serie';

interface CalculateProps {
  n: number;
  onResult: (result: number) => void;
}

const Calculate: React.FC<CalculateProps> = ({ n, onResult }) => {
  React.useEffect(() => {
    const result = Serie.calculateSerie(n);
    onResult(result);
  }, [n, onResult]);

  return null;
};

export default Calculate;