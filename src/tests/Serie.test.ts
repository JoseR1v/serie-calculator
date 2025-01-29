import { Serie } from '../utils/Serie';

describe('Pruebas de la serie', () => {
  test('Cálculo de los primeros 10 términos de la serie', () => {
    const entradas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultadosEsperados = [9, 20, 34, 52, 69, 96, 121, 155, 185, 209];

    entradas.forEach((entrada, index) => {
      const resultado = Serie.calculateSerie(entrada);
      expect(resultado).toBe(resultadosEsperados[index]);
    });
  });
});