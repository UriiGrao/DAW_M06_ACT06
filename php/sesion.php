<?php
session_start();

$resp = $_SESSION['user'] = '{"nombre": "Orito", "Apellido": "Buuu"}';
echo($resp);