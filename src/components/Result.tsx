import React from 'react';

interface ResultadoProps {
  result: number | null;
}

const Result: React.FC<ResultadoProps> = ({ result }) => {
  return (
    <div>
      {result !== null && !isNaN(result) ? (
        <p>El resultado de la serie es: {result}</p>
      ) : (
        <p className='error'>El valor ingresado no es válido</p>
      )}
    </div>
  );
};

export default Result;
