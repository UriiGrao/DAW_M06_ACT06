<?php
session_start();

$resp = $_SESSION['user'] = '{"nombre": "Orioto", "Apellido": "Buuu"}';
echo($resp);