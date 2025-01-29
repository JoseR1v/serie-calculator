export class Serie {

    static primo(n: number): number {
      const primos: number[] = [];
      let num = 2;
      while (primos.length < n) {
        if (primos.every((p) => num % p !== 0)) primos.push(num);
        num++;
      }      
      return primos[n - 1];
    }

    
  
    static fibonacci(n: number): number {
        if (n <= 0) return n;
        let series = [0, 1];
        for (let i = 2; i < n; i++) {
            series.push(series[i - 1] + series[i - 2]);
        }   
        return series[n - 1];
    }
  
    static triangular(n: number): number {
        return (n * (n + 1)) / 2;
    }
  
    static calculateSerie(n: number): number {
      return (-3 * this.primo(n)) - (this.fibonacci(n)) + (5 * this.triangular(n + 1));
    }
  }