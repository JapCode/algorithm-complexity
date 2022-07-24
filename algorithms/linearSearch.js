/**
 * Complejidad Temporal -> O(n)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1) complejida espacial - espacio de entrada
 */
function linearSearch(arreglo, clave) {
  //CE=O(n)
  for (let indice = 0; indice < arreglo.length; indice++) {
    //CT=o(n) CE=o(1)
    if (arreglo[indice] === clave) {
      //CT=o(1)
      return indice; //o(1)
    }
  }
  return -1; // CT=o(1)
}
