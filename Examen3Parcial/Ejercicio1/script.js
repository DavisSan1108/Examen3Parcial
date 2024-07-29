// Array de personas
const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 15 },
    { nombre: "María", edad: 19 }
];

// Función para filtrar personas mayores de edad
function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

// Función para mostrar la lista de personas en el HTML
function mostrarPersonas(personas, elementoId) {
    const lista = document.getElementById(elementoId);
    lista.innerHTML = ''; // Limpiar la lista
    personas.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre} - ${persona.edad} años`;
        lista.appendChild(li);
    });
}

// Mostrar todas las personas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarPersonas(personas, 'personList');

    // Filtrar y mostrar mayores de edad al hacer clic en el botón
    const filterButton = document.getElementById('filterButton');
    filterButton.addEventListener('click', () => {
        const mayoresDeEdad = filtrarMayoresDeEdad(personas);
        mostrarPersonas(mayoresDeEdad, 'filteredPersonList');
    });
});
