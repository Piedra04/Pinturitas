window.onload = iniciar

//Ponemos de default que no se pueda pintar y que sea el blaco para pintar, es decir, que no se vea nada
let colorSeleccionado = "white"
let pintarActivo = false

//Funcion que se realiza al cargar la pagina
function iniciar() {
  //Cogemos el div
  let div = document.getElementById('pinturitas')
  //Creaamos la tabla y ponemos el numero de filas y columnas que necesitemos
  const tabla = document.createElement("table")
  const numFilas = 30
  const numColumnas = 60

  //Vamos creando las filas y las columnas
  for (let i = 0; i < numFilas; i++) {
    const tr = document.createElement("tr")
    for (let j = 0; j < numColumnas; j++) {
      const td = document.createElement("td")
      tr.appendChild(td)

      //Añadimos la funcion de que se pinte la celda
      td.addEventListener("mouseenter", pintarCelda)
      //Añadimos que al clickar se active o desactive que se pueda pintar
      td.addEventListener("click", activarDesactivarPintar)
    }
    tabla.appendChild(tr)
  }
  div.appendChild(tabla)
}

//Selecciona los botones de color y les añadimos el onclick
let rojo = document.getElementById('rojo')
let amarillo = document.getElementById('amarillo')
let verde = document.getElementById('verde')
let azul = document.getElementById('azul')
let borrar = document.getElementById('borrar')

rojo.addEventListener('click', cambiarColorRojo)
amarillo.addEventListener('click', cambiarColorAmarillo)
verde.addEventListener('click', cambiarColorVerde)
azul.addEventListener('click', cambiarColorAzul)
borrar.addEventListener('click', borrarCelda)

//Cambiamos el color que necesitemos
function cambiarColorRojo() {
  cambiarColor('red')
}

function cambiarColorAmarillo() {
  cambiarColor('yellow')
}

function cambiarColorVerde() {
  cambiarColor('green')
}

function cambiarColorAzul() {
  cambiarColor('blue')
}

function borrarCelda() {
  cambiarColor('white')
}

//Cambiamos el color y mostramos que color esta seleccionado
function cambiarColor(color) {
  colorSeleccionado = color
  let seleccionado = document.getElementById('seleccionado')
  seleccionado.innerHTML = 'SELECCIONADO: ' + color
}

//Funcion para pintar la celda
function pintarCelda(event) {
  if (pintarActivo) {
    event.target.style.backgroundColor = colorSeleccionado
  }
}

//Función para activar o desactivar el pintar
function activarDesactivarPintar() {
  pintarActivo = !pintarActivo
}

//Función para limpiar todo
function reiniciar() {
  location.reload()
}
