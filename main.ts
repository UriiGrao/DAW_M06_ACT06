/*  VER USUARIO */
function getUser(fn: Function) {
     const url = "http://localhost/practica6/src/php/getUser.php"
     fetch(url).then(resp => resp.json()).then(resp => {
          fn(resp.user);
     });
}

function mostrarUser() {
     this.getUser((userP) => {
          const div = document.getElementById("seeUser")
          div.innerHTML = "nombre: " + userP.nombre + "<br>";
          div.innerHTML += "apellido: " + userP.apellido1 + "<br>";
          div.innerHTML += "apellido2: " + userP.apellido2 + "<br>";
          div.innerHTML += "edad: " + userP.edad + "<br>";
     })
}


/* VER USUARIOS */
function getUsers(fn: Function) {
     const url = "http://localhost/practica6/src/php/getUsers.php"
     fetch(url).then(resp => resp.json()).then(resp => {
          fn(resp.users);
     });
}
/* Otra manera de construir una funcion */
const mostrarUsers = () => {
     this.getUsers((usersP) => {
          console.log(usersP);

     })
}