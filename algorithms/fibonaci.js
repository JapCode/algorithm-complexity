/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n)
 * Espacio Auxiliar -> O( 1 )
 */
function fibonacci(numero) {
  //CE=O(1)
  const secuenciaFibonacci = [1]; // CT=O(1) CE=O(n)

  let valorPrevio = 0; // CT=O(1) CE=O(1)
  let valorActual = 1; // CT=O(1) CE=O(1)

  if (numero === 1) {
    // CT=O(1)
    return secuenciaFibonacci; // CT=O(1)
  }

  let i = numero - 1; // CT=O(1) CE=O(1)

  while (i) {
    // CT=O(n) CE=O(1)
    valorActual += valorPrevio; // CT=O(1)
    valorPrevio = valorActual - valorPrevio; // CT=O(1)
    secuenciaFibonacci.push(valorActual); // CT=O(1)
    i -= 1; // CT=O(1)
  }

  return secuenciaFibonacci; // CT=O(1)
}
