<?php
session_start();

if (isset($_GET["more"])) {
    $resp = $_SESSION['users'] =
        '{"nombre": "Orito", "apellido": "Buuu"}, {"nombre": "Mireis", "apellido": "Baah"}';
    echo ($resp);
} else {
    $resp = $_SESSION['user'] = '{"nombre": "Orito", "apellido": "Buuu"}';
    echo ($resp);
}
