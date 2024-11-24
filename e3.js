// Crea una función llamada palabraMasLarga que reciba una frase como argumento y devuelva la palabra más larga de la frase. Si hay varias palabras con la misma longitud, devuelve la primera que aparece.

function palabraMasLarga(frase) {
  if (frase.trim() === "") {
    return "La frase está vacía";
  }

  // Dividir la frase en palabras
  const palabras = frase.split(" ");

  // Encontrar la palabra más larga
  let masLarga = palabras[0];

  for (let palabra of palabras) {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  }

  return masLarga;
}

// Pruebas
console.log(palabraMasLarga("El desarrollo de software es fascinante")); // "desarrollo"
console.log(palabraMasLarga("Hoy es un gran día")); // "gran"
console.log(palabraMasLarga("JavaScript es genial")); // "JavaScript"
console.log(palabraMasLarga("")); // "La frase está vacía"
console.log(palabraMasLarga("Uno dos tres cuatro cinco")); // "cuatro"
