let edades = [];

let edad;
while (true) {
  edad = prompt("Ingrese la edad de varias personas (o escriba 'listo' para terminar)") ;
  if (edad.toLowerCase() === "listo") {
    break; // si el usuario ingresa "listo", salimos del bucle
  }
  edades.push(parseInt(edad)); // convertimos la edad a número entero y la agregamos al array
}

// Calculamos la suma de las edades utilizando un bucle for
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
  sumaEdades += edades[i];
}

// Calculamos el promedio de las edades y lo mostramos en una ventana emergente de alerta
let edadPromedio = sumaEdades / edades.length;
alert("La edad promedio de las personas registradas es: " + edadPromedio) + "\n";


//si el usuarido desea seguir le sugerimos volver a cargar la pagina
alert("Presiona F5 si quieres volver a intentarlo");
// si no desea seguir, le agradecemos por meterse 
alert ("gracias por interactuar")


