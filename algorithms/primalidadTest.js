/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( 1)
 * Espacio Auxiliar -> O(  1)
 */
function primalidadTest(numero) {
  // CE=O(  1)
  if (numero <= 3) {
    // CT=O(  1)
    return true; // CT=O(  1)
  }

  if (numero % 1 !== 0) {
    // CT=O(  1)
    return false; // CT=O(  1)
  }

  if (numero <= 1) {
    // CT=O(  1)
    return false; // CT=O(  1)
  }

  if (numero % 2 === 0) {
    // CT=O(  1)
    return false; // CT=O(  1)
  }

  const limiteDivisor = Math.sqrt(numero); // CT=O(  1) CE=O(  1)
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) {
    // CT=O(  n) CE=O(  1)
    if (numero % divisor === 0) {
      // CT=O(  1)
      return false; // CT=O(  1)
    }
  }

  return true; // CT=O(  1)
}
