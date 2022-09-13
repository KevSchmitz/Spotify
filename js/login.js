let token = localStorage.getItem('token');
let login = document.querySelector('#submit');


login.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    let formulario = document.querySelector('#login');
    console.dir(formulario)

    let valorUsername = formulario.username.value;
    let valorPassword = formulario.password.value;
    const token = generarToken(valorUsername, valorPassword);
    localStorage.setItem('token', token);
    existeToken();
    if (existeToken()) {
        window.location.href = './app.html';
    }
})

function generarToken(username, password) {
    return username + password;
}

function existeToken() {
    if (localStorage.getItem('token') !== null) {
        return true
    } else {
        return false;
    }
}
