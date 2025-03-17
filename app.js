// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar el array para los nombres 
let amigos = [];

// Agregar un amigo al listado
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    
    // Validar el input
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agrega el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo 
    inputAmigo.value = "";
    
    // Actualizar la lista 
    actualizarLista();
}

// Función para actualizar la lista 
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    // Recorrer el array y agregar cada amigo como un elemento <li>
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Función para sortear amigo y eliminarlo del listado
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    // Validar existencia en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    // Generar índice 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar resultado
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    
    // Eliminar amigo sorteado
    amigos.splice(indiceAleatorio, 1);
    
    // Actualizar el listado
    actualizarLista();
}

// Función para eliminar un nombre del listado
function sacarNombre() {
    let nombreASacar = prompt("Ingrese el nombre a sacar de la lista:");
    
    // Validar entrada del usuario
    if (nombreASacar === null || nombreASacar.trim() === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    nombreASacar = nombreASacar.trim();
    
    // Buscar el índice del nombre en el array
    let indice = amigos.indexOf(nombreASacar);
    
    // Validar existencia en el array
    if (indice === -1) {
        alert("El nombre no se encuentra en la lista.");
        return;
    }
    
    // Eliminar nombre del array
    amigos.splice(indice, 1);
    
    // Actualizar el listado
    actualizarLista();
}
//that's all folks