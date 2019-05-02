var _this = this;
/*  VER USUARIO */
function getUser(fn) {
    var url = "http://localhost/m06Pr6/php/getUser.php";
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
    var url = "http://localhost/m06Pr6/php/getUsers.php";
    fetch(url).then(function (resp) { return resp.json(); }).then(function (resp) {
        fn(resp.users);
    });
}
/* Otra manera de construir una funcion */
var mostrarUsers = function () {
    _this.getUsers(function (usersP) {
        var div = document.getElementById("seeUsers");
        usersP.forEach(function (user) {
            div.innerHTML += "nombre: " + user.nombre + "<br>";
            div.innerHTML += "apellido: " + user.apellido1 + "<br>";
            div.innerHTML += "apellido2: " + user.apellido2 + "<br>";
            div.innerHTML += "edad: " + user.edad + "<br>----<br>";
        });
    });
};
/* VER USUARIO SESSION */
function mostrarUserSession() {
}
function getParaula(saved) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "php/getColor.php?" + saved, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var resposta = xmlhttp.responseText;
                var jsonColor = JSON.parse(resposta);
                var color = jsonColor.color;
                console.log(color);
                var long = jsonColor.long;
                document.getElementById("palabra").innerHTML = "";
                for (var k = 0; k < long; k++) {
                    var span = document.createElement("SPAN");
                    span.id = "letra" + k;
                    span.innerHTML = " _ ";
                    document.getElementById("palabra").appendChild(span);
                }
            }
        }
    };
    xmlhttp.send();
}
