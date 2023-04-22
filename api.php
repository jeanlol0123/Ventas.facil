<?php
//recibir el json
$productos=json_decode($_POST["json"],true);
require 'conexion.php';
foreach($productos as $producto){
    $codigo=$producto["codigo"];
    $nombre=$producto["nombre"];
    $precio=$producto["precio"];
    $cantidad=$producto["cantidad"];
    $guardar=mysqli_query($con,"INSERT INTO productos_det(codigo,nombre,precio,cantidad" VALUES ('$codigo','$nombre','$precio','$cantidad')");
    
}