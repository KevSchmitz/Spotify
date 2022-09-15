function existeToken() {
    if (localStorage.getItem('token') !== null) {
        return true
    } else {
        return false;
    }
}

if (!existeToken()) {
    window.location.href = './index.html';
}

// Log Out
const perfil = document.querySelector('.header-perfil');
const contenedorPerfil = document.querySelector('.header-contenedor')


let crearDiv = document.createElement('div');
crearDiv.classList = 'logout-hidden';

crearDiv.textContent = 'Log Out';
contenedorPerfil.append(crearDiv);

function logout() {
    localStorage.removeItem('token');
}

perfil.addEventListener('click', () => {
    switch (crearDiv.classList.value) {
        case 'logout-hidden':
            crearDiv.classList = 'logout';
            break;
        case 'logout':
            crearDiv.classList = 'logout-hidden';
            break;
    }
})

crearDiv.addEventListener('click', () => {
    logout();
    window.location.reload();
})