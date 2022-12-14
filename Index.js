var form = document.getElementById("formulario");
const resultado = document.getElementById("Resultado");
const boton = document.querySelector("#flecha");
var datos = [];
var poblacion = 1;

var mayores = 0;
var sexto = 0;
var septimo = 0;
var octavo = 0;
var noveno = 0;
var decimo = 0;
var undecimo = 0;
var Masc = 0;
var Femen = 0;
var Otro = 0;
var playa = 0;
var malambo = 0;
var Barraq = 0;
var galapa = 0;

var evento = 0;
boton.addEventListener('click', () => {

  evento++;

  if(evento == 1){
    resultado.style.display="block";
    boton.classList.add('botonActive');

  }else if(evento==2){
    resultado.style.display="none";
    boton.classList.remove('botonActive');

    evento=0;
  }
  
});

function accion(e) {
  e.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var sexo = document.getElementById("sexo").value;
  var curso = document.getElementById("curso").value;
  var estado = document.getElementById("estado").value;
  var ciudad = document.getElementById("ciudad").value;

  const dato = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    sexo: sexo,
    curso: curso,
    estado: estado,
    poblacion: poblacion,
    ciudad: ciudad,
  };

  datos.push(dato);
  if (datos.length >= 2) {
    analisis();
    boton.style.display = "block";
  }
}

function analisis() {
  for (let i = 0; i < datos.length; i++) {
    const Paquetedato = datos[i];

    if (Paquetedato.edad > 18) {
      mayores++;
    }

    if (Paquetedato.curso == 1) {
      sexto++;
    } else if (Paquetedato.curso == 2) {
      septimo++;
    } else if (Paquetedato.curso == 3) {
      octavo++;
    } else if (Paquetedato.curso == 4) {
      noveno++;
    } else if (Paquetedato.curso == 5) {
      decimo++;
    } else if (Paquetedato.curso == 6) {
      undecimo++;
    }

    if (Paquetedato.sexo == 1) {
      Masc++;
    } else if (Paquetedato.sexo == 2) {
      Femen++;
    } else if (Paquetedato.sexo == 3) {
      Otro++;
    }

    if (Paquetedato.ciudad == 1) {
      playa++;
    } else if (Paquetedato.ciudad == 2) {
      malambo++;
    } else if (Paquetedato.ciudad == 3) {
      Barraq++;
    } else if (Paquetedato.ciudad == 4) {
      galapa++;
    }
  }

  resultado.innerHTML =
    "Cantidad de personas encuestadas: 10 <br> Cantidad de personas mayor de edad: " +
    mayores +
    " <br> Cantidad de personas por curso: " +
    "<br> " +
    "Sexto: " +
    sexto +
    "<br>" +
    "Septimo: " +
    septimo +
    "<br>" +
    "Octavo: " +
    octavo +
    "<br>" +
    "Noveno: " +
    noveno +
    "<br>" +
    "Decimo: " +
    decimo +
    "<br>" +
    "Undecimo: " +
    undecimo +
    "<br> <br>" +
    "Personas de Genero Masculino: " +
    Masc +
    " <br> Personas de genero Femenino: " +
    Femen +
    "<br> Otros: " +
    Otro +
    "<br> Ciudad <br>" +
    "La playa: " +
    playa +
    "<br> Malambo: " +
    malambo +
    "<br> Barranquilla: " +
    Barraq +
    "<br> Galapa: " +
    galapa;
}

form.addEventListener("submit", accion);
