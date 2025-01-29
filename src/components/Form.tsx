import React, { useState } from 'react';

interface FormProps {
  onSubmit: (n: number) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    const n = parseInt(input);
    if (!isNaN(n)) {
      onSubmit(n);
    }
  };

  return (
    <form className='form' onSubmit={manejarEnvio}>
      <p>Introduce el n-ésimo termino a calcular en la serie</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Introduce n"
      />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
