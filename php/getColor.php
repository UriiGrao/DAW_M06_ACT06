<?php
session_start();

$colors = ["black", "red", "blue", "orange", "white"];

function startGame()
{
    global $colors;
    $numRand = rand(0, count($colors) - 1);
    $color = $colors[$numRand];
    $_SESSION['color'] = $color;

    $long = strlen($color);

    echo '{"color":"' . $color . '", "long":"' . $long . '"}';
}

function conLetra()
{
    $cont = 0;
    $pos = -1;
    $letra = $_GET["letra"];
    $frase = str_split($_SESSION['color']);
    foreach ($frase as $letraColor) {
        if ($cont == 0) {
            $pos++;
        }
        if ($letra == $letraColor) {
            $cont++;
        }
    }
    if ($cont == 0) {
        echo '{"response":"error"}';
    } else {
        echo '{"response":"correct", "pos":"' . $pos . '", "letra":"' . $letra . '"}';
    }
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET["letra"])) {
            conLetra();
        } else {
            startGame();
        }
        break;
    case 'POST':
}
