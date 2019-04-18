var _this = this;
/*  VER USUARIO */
function getUser(fn) {
    var url = "http://localhost/practica6/src/php/getUser.php";
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        fn(resp.user);
    });
}
function mostrarUser() {
    this.getUser(function (userP) {
        var div = document.getElementById("seeUser");
        div.innerHTML = "nombre: " + userP.nombre + "<br>";
        div.innerHTML += "apellido: " + userP.apellido1 + "<br>";
        div.innerHTML += "apellido2: " + userP.apellido2 + "<br>";
        div.innerHTML += "edad: " + userP.edad + "<br>";
    });
}
/* VER USUARIOS */
function getUsers(fn) {
    var url = "http://localhost/practica6/src/php/getUsers.php";
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        fn(resp.users);
    });
}
/* Otra manera de construir una funcion */
var mostrarUsers = function () {
    _this.getUsers(function (usersP) {
        console.log(usersP);
    });
};
