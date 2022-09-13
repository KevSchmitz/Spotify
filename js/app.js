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