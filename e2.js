// Crea una función llamada contarVocales que reciba una cadena como argumento y devuelva la cantidad de vocales (a, e, i, o, u) que contiene. Ignora las mayúsculas o minúsculas.
function contarVocales(cadena) {
  // Convertir la cadena a minúsculas para ignorar mayúsculas
  cadena = cadena.toLowerCase();

  // Definir las vocales
  const vocales = ["a", "e", "i", "o", "u"];

  // Contador de vocales
  let contador = 0;

  // Recorrer la cadena y contar las vocales
  for (let letra of cadena) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Pruebas
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("Javascript")); // 3
console.log(contarVocales("")); // 0
console.log(contarVocales("AEIOUaeiou")); // 10
console.log(contarVocales("XYZ")); // 0
