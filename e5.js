// Crea una función llamada encontrarMaximo que reciba un arreglo de números y devuelva el número más grande en el arreglo.

function encontrarMaximo(arreglo) {
  // Inicializamos el máximo con el primer número del arreglo
  let maximo = arreglo[0];

  // Recorremos el arreglo con un ciclo for
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i]; // Actualizamos el máximo si encontramos un número mayor
    }
  }

  return maximo;
}

// Pruebas
console.log(encontrarMaximo([1, 5, 8, 3])); // 8
console.log(encontrarMaximo([-1, -3, -7, -2])); // -1
console.log(encontrarMaximo([10, 20, 30, 40])); // 40
console.log(encontrarMaximo([5, 5, 5, 5])); // 5
