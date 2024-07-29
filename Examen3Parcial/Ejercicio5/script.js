// Array de objetos de ejemplo
let objetos = [
    { nombre: 'Laptop', valor: 1000 },
    { nombre: 'Teléfono', valor: 500 },
    { nombre: 'Tablet', valor: 300 },
    { nombre: 'Monitor', valor: 200 }
];

// Función para ordenar por propiedad
function ordenarPorPropiedad(arr, propiedad) {
    return arr.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        }
        if (a[propiedad] > b[propiedad]) {
            return 1;
        }
        return 0;
    });
}

// Función para mostrar la lista de objetos en el HTML
function mostrarObjetos(objetos, elementoId) {
    const lista = document.getElementById(elementoId);
    lista.innerHTML = ''; // Limpiar la lista
    objetos.forEach(objeto => {
        const li = document.createElement('li');
        li.textContent = `${objeto.nombre} - $${objeto.valor}`;
        lista.appendChild(li);
    });
}

// Mostrar los objetos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarObjetos(objetos, 'itemList');

    // Agregar event listener al botón para agregar nuevos objetos
    const addButton = document.getElementById('addItemButton');
    addButton.addEventListener('click', () => {
        const nombre = document.getElementById('itemInput').value.trim();
        const valor = parseFloat(document.getElementById('valueInput').value.trim());
        if (nombre && !isNaN(valor)) {
            objetos.push({ nombre, valor });
            mostrarObjetos(objetos, 'itemList');
            document.getElementById('itemInput').value = '';
            document.getElementById('valueInput').value = '';
        } else {
            alert('Por favor, ingresa un nombre y un valor válidos.');
        }
    });

    // Ordenar y mostrar objetos al hacer clic en el botón de ordenar
    const sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', () => {
        const propiedad = document.getElementById('propertyInput').value.trim();
        if (propiedad && (propiedad === 'nombre' || propiedad === 'valor')) {
            const objetosOrdenados = ordenarPorPropiedad(objetos, propiedad);
            mostrarObjetos(objetosOrdenados, 'itemList');
        } else {
            alert('Por favor, ingresa una propiedad válida para ordenar (nombre o valor).');
        }
    });
});
