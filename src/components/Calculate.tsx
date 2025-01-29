import React from 'react';
import { Serie } from '../utils/Serie';

interface CalculateProps {
  n: number;
  onResult: (resultado: number) => void;
}

const Calculate: React.FC<CalculateProps> = ({ n, onResult }) => {
  React.useEffect(() => {
    const resultado = Serie.calculateSerie(n);
    onResult(resultado);
  }, [n, onResult]);

  return null;
};

export default Calculate;