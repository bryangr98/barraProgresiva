//obtener botones volver y adeltante
const botonVolver = document.getElementById("volver");
const botonAdelante = document.getElementById("adelante");
//obtener la clase de los circulos de progreso
const progress = document.querySelectorAll(".progress");
//obtener barra progreso
const line = document.querySelector(".lineProgress");
//obtener la clase .active
const actives = document.getElementsByClassName("active");
let activo = 1;



//Funcion para actualizar el contador crecer la barra line y aderir la clase active
const actualizar = () => {
  //recorre todos los .progress y toma los valores del
  progress.forEach((circulo, index) => {
    if (index < activo) {
      circulo.classList.add("active");
    } else {
      circulo.classList.remove("active");
    }
  });

  //el estilo del ancho de line
  line.style.width = (actives.length - 1) * 32 + "%";
//activa y desactiva la propiedad disambled
  if (activo === 1) {
    botonVolver.disabled = true;
  } else if (activo === progress.length) {
    botonAdelante.disabled = true;
  } else {
    botonAdelante.disabled = false;
    botonVolver.disabled = false;
  }
};

botonAdelante.addEventListener("click", () => {
  //aumenta activo en uno
  activo++;
  if (activo > progress.length) {
    activo = progress.length;
  }
  actualizar();
});

botonVolver.addEventListener("click", () => {
  activo--;
  if (activo < 1) {
    activo = 1;
  }
  actualizar();
});

//funcion para que solo se puedan colocar 3 o 6 caracteres
// Agregar evento input al input
color.addEventListener("input", validarLongitud);

function validarLongitud() {
  const valor = color.value;
  if (valor.length === 3 || valor.length === 6) {
    // Si la longitud es correcta, quitar la clase "invalido" si existe
    color.classList.remove("invalido");
  } else {
    // Si la longitud es incorrecta, agregar la clase "invalido" si no existe
    color.classList.add("invalido");
  }
}
