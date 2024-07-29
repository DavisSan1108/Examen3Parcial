// Función para agregar un nuevo ítem a la lista
function agregarNuevoItem() {
    const lista = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');
    const nombreItem = itemInput.value.trim();

    if (nombreItem === '') {
        alert('Por favor, ingresa un nombre para el ítem.');
        return;
    }

    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = nombreItem;

    // Crear el botón de eliminar
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', () => {
        lista.removeChild(nuevoItem);
    });

    // Agregar el botón de eliminar al ítem
    nuevoItem.appendChild(removeButton);

    // Agregar el nuevo ítem a la lista
    lista.appendChild(nuevoItem);

    // Limpiar el campo de entrada
    itemInput.value = '';
}

// Agregar event listener al botón para agregar nuevos ítems
document.getElementById('addItemButton').addEventListener('click', agregarNuevoItem);
