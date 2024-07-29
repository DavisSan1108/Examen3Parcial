// Función para transformar y filtrar el arreglo
function transformarYFiltrar(arr) {
    return arr
        .map(num => num * num) // Calcular el cuadrado de cada número
        .filter(cuadrado => cuadrado > 20); // Filtrar los cuadrados mayores de 20
}

// Función para mostrar los resultados en el HTML
function mostrarResultados(resultados) {
    const lista = document.getElementById('resultList');
    lista.innerHTML = ''; // Limpiar la lista
    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        lista.appendChild(li);
    });
}

// Agregar event listener al botón para transformar y filtrar al hacer clic
document.getElementById('transformButton').addEventListener('click', () => {
    const input = document.getElementById('numberInput').value.trim();
    if (input) {
        const numeros = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        if (numeros.length > 0) {
            const resultados = transformarYFiltrar(numeros);
            mostrarResultados(resultados);
        } else {
            alert('Por favor, ingresa números válidos.');
        }
    } else {
        alert('Por favor, ingresa números separados por comas.');
    }
});
