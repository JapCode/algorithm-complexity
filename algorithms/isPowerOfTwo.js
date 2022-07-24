/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(1  )
 * Espacio Auxiliar -> O( 1 )
 */

function isPowerOfTwo(n) {
  //CE=O(1)
  if (n < 1) {
    //CT=O(1)
    return false; //CT=O(1)
  }

  let numeroDividido = n; //CT=O(1) CE=O(1)
  while (numeroDividido !== 1) {
    //CT=O(n) CE=O(1)
    if (numeroDividido % 2 !== 0) {
      //CT=O(1)
      return false; //CT=O(1)
    }
    numeroDividido = numeroDividido / 2; //CT=O(1)
  }

  return true; //CT=O(1)
}
