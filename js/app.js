// // WebTransportError.addEventlistener("change", function ()  {
// //     respuesta.textContent =
// //     "Opcion seleccionada: " + WebTransportError.value;
// // });

// const boton = document.getElementById("mostrar");
// const boton = document.getElementById("salida");

// const transporte = document.getElementById("transporte");
// const respuesta = document.getElementById("respuesta");
// const boton = document.getElementById("miBoton");
// const salida = document.getElementById("miSalida");

// // boton.addEventListener ("click", function (){
// //     salida.textContent = "El boton fue presionado.";

// // });

// gusto.addEventListener
// ("change", function (){
//     respuesta.textContent = "Opcion seleccionada: " + transporte.value;
// });


// let contador = 0;
// boton.addEventListener("click", function(){
//     contador++;
//     salida.textContent = "Cuantos penes se come jhojan diarios" + contador;

// });

const entradaNumero = document.getElementById("numero");
const salidaNumero = document.getElementById("lejos");

entradaNumero.addEventListener("input", function () {
    let Numero = Number(entradaNumero.value);

    if (Numero > 5) {
        salidaNumero.textContent = "Mas abajo!!";
    } else if (Numero < 5) {
        salidaNumero.textContent = "Mas arriba!!";
    } else if (Numero == 5){
        salidaNumero.textContent = "Felicidades, Sabes cual es mi favorito!!";
    }     
});

const pasion = document.getElementById("pasion");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagen");

pasion.addEventListener("change", function () {
  const valor = pasion.value;

  if (valor === "futbol") {
    texto.textContent = "Real Madrid";
    imagen.src = "https://okdiario.com/diariomadridista/img/2023/04/04/escudo-real-madrid-655x368.jpg";
    imagen.style.display = "block";
  } else if (valor === "moto") {
    texto.textContent = "MT 09 V3";
    imagen.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyDmXcflyrCgNgBgsAOhBdwqiUAreEYmFv8tQXl4-JK8e-35__";
    imagen.style.display = "block";
  } else if (valor === "musica") {
    texto.textContent = "Michael Jackson";
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDRCpTt2h4uh1vzWNQgo6HF9v_X0bUpswp6U1zf5fug&s=10";
    imagen.style.display = "block";
  } else {
    texto.textContent = "";
    imagen.style.display = "none";
  }
});


const boton = document.getElementById("mostrar");
const salida = document.getElementById("salida");

boton.addEventListener("click", function () {
    salida.textContent =     salida.textContent = alert("Profe lo felicito usted es una gran persona, con una gran personalidad, nunca cambie");
});