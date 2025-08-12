let amigos = [];

// Función para validar si el texto está vacío o sólo tiene espacios
function esVacioOCampoConEspacios(texto) {
    if (texto.length === 0) return true;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            return false; // encontró un carácter que no es espacio
        }
    }
    return true; // sólo espacios
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value;

    if (esVacioOCampoConEspacios(nombre)) {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validar que no tenga números
    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i]) && nombre[i] !== " ") {
            alert("El nombre no puede contener números.");
            return;
        }
    }

    amigos.push(nombre);
    input.value = ""; // limpiar campo
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${i + 1}. ${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML =
        `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
