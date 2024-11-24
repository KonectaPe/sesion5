// Crea una función llamada sumarArreglo que reciba un arreglo de números y devuelva la suma de todos sus elementos.

function sumarArreglo(arreglo) {
  let suma = 0; // Variable para almacenar la suma

  // Recorremos el arreglo con un ciclo for
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i]; // Sumamos el valor del arreglo al total
  }

  return suma;
}

// Pruebas
console.log(sumarArreglo([1, 2, 3, 4])); // 10
console.log(sumarArreglo([10, -2, 3])); // 11
console.log(sumarArreglo([5, 5, 5, 5])); // 20
console.log(sumarArreglo([0, 0, 0])); // 0
