<?php

$productos=json_decode($_POST['json'],true);
require 'conexion.php';
foreach($personal as $person){
    $codigo=$person['codigo'];
    $nombre=$person['nombre'];
    $identificacion=$person['identificacion'];
    $direccion=$person['direccion'];
    $telefono=$person['telefono'];
    $usuario=$person['usuario'];
    $contraseña=$person['contraseña'];
    $correo=$person['correo'];
    $nacimiento=$person['nacimiento'];
    $genero=$person['genero'];
    $tipouser=$person['tipouser'];

    $guardar=mysqli_query($con,"INSERT INTO detalle_personal (codigo, nombre, identificacion, direccion, telefono, usuario, contraseña, correo, nacimiento, genero, tipouser) VALUES ('$codigo', '$nombre', '$identificacion', '$direccion', '$telefono', '$usuario', '$contraseña', '$correo', '$nacimiento', '$genero', '$tipouser')");
}
