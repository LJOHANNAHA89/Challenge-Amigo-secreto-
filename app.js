// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Seleccionar elementos del DOM
const inputNombre = document.getElementById("amigo");
const btnAdicionar = document.querySelector(".button-add");
const listaNombres = document.getElementById("listaAmigos");
const btnSortear = document.querySelector(".button-draw");
const resultado = document.getElementById("resultado");

// Arreglo para almacenar los nombres
let nombres = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

// Función para actualizar la lista visible
function actualizarLista() {
    listaNombres.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    resultado.innerHTML = `<li>Amigo sorteado: ${nombres[indiceAleatorio]}</li>`;
}