// Lista de nombres registrados
let nombresRegistrados = [
    { name: 'Leanne Graham', email: 'Sincere@april.biz' },
    { name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
    { name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
    { name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org' },
    { name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca' },
    { name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info' },
    { name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz' },
    { name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me' },
    { name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io' },
    { name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz' }
];

// Función para obtener usuarios usando fetch
async function obtenerUsuarios(name) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const usuarios = await response.json();
        const usuarioFiltrado = usuarios.filter(usuario => usuario.name.toLowerCase() === name.toLowerCase());
        if (usuarioFiltrado.length > 0) {
            mostrarUsuarios(usuarioFiltrado);
        } else {
            mostrarMensaje("Usuario no encontrado");
        }
    } catch (error) {
        console.error('Hubo un problema con la petición fetch:', error);
        mostrarMensaje("Error en la petición de datos");
    }
}

// Función para mostrar la lista de usuarios en el HTML
function mostrarUsuarios(usuarios) {
    const lista = document.getElementById('userList');
    lista.innerHTML = ''; // Limpiar la lista
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.name} - ${usuario.email}`;
        lista.appendChild(li);
    });
}

// Función para mostrar un mensaje en la lista de usuarios
function mostrarMensaje(mensaje) {
    const lista = document.getElementById('userList');
    lista.innerHTML = ''; // Limpiar la lista
    const li = document.createElement('li');
    li.textContent = mensaje;
    lista.appendChild(li);
}

// Función para mostrar usuarios registrados
function mostrarUsuariosRegistrados() {
    mostrarUsuarios(nombresRegistrados);
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const nuevoUsuario = document.getElementById('newUserNameInput').value.trim();
    const nuevoCorreo = document.getElementById('newUserEmailInput').value.trim();
    if (nuevoUsuario && nuevoCorreo) {
        if (!nombresRegistrados.some(usuario => usuario.name === nuevoUsuario)) {
            nombresRegistrados.push({ name: nuevoUsuario, email: nuevoCorreo });
            mostrarMensaje(`Usuario ${nuevoUsuario} registrado correctamente.`);
            document.getElementById('newUserNameInput').value = '';
            document.getElementById('newUserEmailInput').value = '';
        } else {
            mostrarMensaje("El usuario ya está registrado.");
        }
    } else {
        mostrarMensaje("Por favor, ingresa un nombre y correo de usuario.");
    }
}

// Agregar event listener al botón para obtener usuarios al hacer clic
document.getElementById('fetchUsersButton').addEventListener('click', () => {
    const name = document.getElementById('usernameInput').value.trim();
    if (name) {
        if (nombresRegistrados.some(usuario => usuario.name === name)) {
            obtenerUsuarios(name);
        } else {
            mostrarMensaje("Usuario no registrado");
        }
    } else {
        mostrarMensaje("Por favor, ingresa un nombre de usuario");
    }
});

// Agregar event listener al botón para mostrar usuarios registrados
document.getElementById('showUsersButton').addEventListener('click', mostrarUsuariosRegistrados);

// Agregar event listener al botón para registrar un nuevo usuario
document.getElementById('registerUserButton').addEventListener('click', registrarUsuario);
