/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  1)
 * Espacio Auxiliar -> O(  1)
 */
function factorial(numero) {
  // CE=O(1)
  let resultado = 1; // CT=O(1) CE=O(1)

  for (let i = 2; i <= numero; i += 1) {
    // CT=O(n) CE=O(1)
    resultado *= i; // CT=O(1)
  }

  return resultado; // CT=O(1)
}
