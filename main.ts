
/*  VER USUARIO */
function getUser(fn: Function) {
     const url = "http://localhost/m06Pr6/php/getUser.php"
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
     const url = "http://localhost/m06Pr6/php/getUsers.php"
     fetch(url).then(resp => resp.json()).then(resp => {
          fn(resp.users);
     });
}
/* Otra manera de construir una funcion */
const mostrarUsers = () => {
     this.getUsers((usersP) => {
          const div = document.getElementById("seeUsers");
          usersP.forEach(user => {
               div.innerHTML += "nombre: " + user.nombre + "<br>";
               div.innerHTML += "apellido: " + user.apellido1 + "<br>";
               div.innerHTML += "apellido2: " + user.apellido2 + "<br>";
               div.innerHTML += "edad: " + user.edad + "<br>----<br>";
          });
     })
}

/* VER USUARIO SESSION */
function getSessionUser(fn: Function) {
     const url = "http://localhost/m06Pr6/php/sesion.php"
     fetch(url).then(resp => resp.json()).then(resp => {
          fn(resp);
     });
}

function mostrarUserSession() {
     this.getSessionUser((userS) => {
          var div = document.getElementById("seeSession");
          div.innerHTML = "Nombre: " + userS.nombre + " / ";
          div.innerHTML += "Apellido: " + userS.apellido;
     })
}

/* VER USUARIOS SESSION */
function getSessionsUser(fn: Function) {
     const url = "http://localhost/m06Pr6/php/sesion.php?more=true";
     fetch(url).then(resp => resp.json()).then(resp => {
          fn(resp);
     });
}

function mostrarUsersSession() {
     this.getSessionsUser((usersS) => {
          console.log(usersS);

     })
}

/* PENJAT!! */
var long = 0;

function generateParaula() {
     let xmlhttp = new XMLHttpRequest();
     xmlhttp.open("GET", "php/getColor.php?", true);
     xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4) {
               if (xmlhttp.status == 200) {
                    let resposta = xmlhttp.responseText;
                    let jsonColor = JSON.parse(resposta);

                    long = jsonColor.long;
                    document.getElementById("palabra").innerHTML = "";
                    for (let k = 0; k < long; k++) {
                         let span = document.createElement("SPAN");
                         span.id = "letra" + k;
                         span.innerHTML = " _ ";
                         document.getElementById("palabra").appendChild(span);
                    }
               }
          }
     }
     xmlhttp.send();

     let div = document.getElementById("error");
     div.innerHTML = "0/5";
     cont = 0;
     contVictory = 0;
}

var cont = 0;
var contVictory = 0;
function sendLetra() {
     let letraD = <HTMLInputElement>document.getElementById('letra');
     let letra = letraD.value;
     let div = document.getElementById("error");

     letraD.value = ""

     fetch(`php/getColor.php?letra=${letra}`)
          .then(resp => resp.json())
          .then(data => {
               if (data.response == "error") {
                    cont++;
                    if (cont < 5) {
                         div.innerHTML = cont + "/5";
                    } else {
                         div.innerHTML = "Perdiste vuelve a empezar!"
                    }
               } else {
                    let span = document.getElementById("letra" + data.pos);
                    span.innerHTML = data.letra;
                    contVictory++;
                    if (long == contVictory) {
                         div.innerHTML = "Ganaste vuelve a empezar!"
                    }
               }
          })


}