<?php
session_start();

$colors = ["yellow", "red", "blue"];


if (isset($_GET["saved"])) {
    $color = $_SESSION['color'];
} else {
    $numRand = rand(0, count($colors) - 1);
    $color = $colors[$numRand];

    $_SESSION['color'] = $color;
}

$long = strlen($color);

echo '{"color":"' . $color . '", "long":"' . $long . '"}';
