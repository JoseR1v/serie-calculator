import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Calculate from './components/Calculate';
import Result from './components/Result';
import serie from './assets/serie.webp'

function App() {
  const [n, setN] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean | null>(false)

  const handleSend = (num: number) => {
    setN(num);
    setShowResult(false);
  };

  const handleResult = (res: number) => {
    setResult(res);
    setShowResult(true);
  };

  return (
    <div>
      <h1>Calculadora de la serie</h1>
      <img className='img' src={serie} alt="Imagen de serie a calcular" />
      <p>Este aplicativo calcula el valor de la serie en el n-ésimo témino. Esta compuesta de tres valores:</p>
      <div className='list'>
        <ul>
          <li>
            <a href="https://es.wikipedia.org/wiki/N%C3%BAmero_primo">El n-ésimo número primo</a>
          </li>
          <li>
            <a href="https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci">La sucesión de Fibonacci</a>
          </li>
          <li>
            <a href="https://es.wikipedia.org/wiki/N%C3%BAmero_primo">El n-ésimo número triangular</a>
          </li>
        </ul>
      </div>
      <Form onSubmit={handleSend} />
      {n !== null && (
        <Calculate n={n} onResult={handleResult} />
      )}
      {showResult && 
        <Result result={result} />
      }
    </div>
  );
}

export default App
