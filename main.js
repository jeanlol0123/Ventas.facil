function validar_num(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
    return true;
    }
    return false;        
}


var btnAgregar=document.getElementById('agregar');
var btnGuardar=document.getElementById('guardar');
var lista=document.getElementById('lista');
var data=[];
var cant=0;

btnAgregar.addEventListener('click', agregar);
btnGuardar.addEventListener('click',save);

function agregar(){
    var codigo=document.getElementById('codigo').value;
    var nombre=document.getElementById('nombre').value;
    var identificacion=parseFloat(document.getElementById('identificacion').value);
    var direccion=document.getElementById('direccion').value;
    var telefono=parseFloat(document.getElementById('telefono').value);
    var usuario=document.getElementById('usuario').value;
    var contraseña=document.getElementById('contraseña').value;
    var correo=document.getElementById('correo').value;
    var nacimiento=document.getElementById('nacimiento').value;
    var genero=document.getElementById('genero').value;
    var tipouser=document.getElementById('tipouser').value;
    
    data.push(
        {
            "id":cant,
            "codigo":codigo,
            "nombre":nombre,
            "identificacion":identificacion,
            "direccion":direccion,
            "telefono":telefono,
            "usuario":usuario,
            "contraseña":contraseña,
            "correo":correo,
            "nacimiento":nacimiento,
            "genero":genero,
            "tipouser":tipouser,        
        }  
    );
    var id_row='row'+cant;
    var fila='<tr id='+id_row+'><td>'+codigo+'</td><td>'+nombre+'</td><td>'+identificacion+'</td><td>'+direccion+'</td><td>'+telefono+'</td><td>'+usuario+'</td><td>'+contraseña+'</td><td>'+correo+'</td><td>'+nacimiento+'</td><td>'+genero+'</td><td>'+tipouser+'</td><td><a href="#" class="btn btn-warning" onclick="modificar('+cant+');">Modificar</a><a href="#" class="btn btn-danger" onclick="eliminar('+cant+');">Eliminar</a></td></tr>';

    $("#lista").append(fila);
    $("#codigo").val('');
    $("#nombre").val('');
    $("#identificacion").val('');
    $("#direccion").val('');
    $("#telefono").val('');
    $("#usuario").val('');
    $("#contraseña").val('');
    $("#correo").val('');
    $("#nacimiento").val('');
    $("#genero").val('');
    $("#tipouser").val('');
    $("#codigo").focus('');
    cant++;
}

function save(){
    var json=JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: "datos-usuario.php",
        contentType: "application/json",
        data: json,
        dataType: "json",
        succes:function(resp){
            location.reload();
        }
    
}
)};

function eliminar(row){
    $("#row"+row).remove();
    var i=0;
    var posicion=0;

    for(x of data){
        if(x.id==row){
            posicion=i;
        }
        i++;
    }

    data.splice(posicion,1);
}

function modificar(row){
    var codi=parseInt(prompt("Nuevo Codigo"));
    data[row].codigo=codi;
    var fila_id0=document.getElementById("row"+row);
    celda=fila_id0.getElementsByTagName("td");
    celda[0].innerHTML=codi;

    var nombe=prompt("Nuevo Nombre");
    data[row].nombre=nombe;
    var fila_id1=document.getElementById("row"+row);
    celda=fila_id1.getElementsByTagName("td");
    celda[1].innerHTML=nombe;

    var identi=prompt("Nueva identificacion");
    data[row].identificacion=identi;
    var fila_id2=document.getElementById("row"+row);
    celda=fila_id2.getElementsByTagName("td");
    celda[2].innerHTML=identi;

    var direc=prompt("Nueva Direccion");
    data[row].direccion=direc;
    var fila_id3=document.getElementById("row"+row);
    celda=fila_id3.getElementsByTagName("td");
    celda[3].innerHTML=direc;

    var tel=prompt("Nuevo Telefono/Celular");
    data[row].telefono=tel;
    var fila_id4=document.getElementById("row"+row);
    celda=fila_id4.getElementsByTagName("td");
    celda[4].innerHTML=tel;

    var user=prompt("Nuevo Usuario");
    data[row].usuario=user;
    var fila_id5=document.getElementById("row"+row);
    celda=fila_id5.getElementsByTagName("td");
    celda[5].innerHTML=user;

    var contra=prompt("Nueva Contraseña");
    data[row].contraseña=contra;
    var fila_id6=document.getElementById("row"+row);
    celda=fila_id6.getElementsByTagName("td");
    celda[6].innerHTML=contra;

    var correo=prompt("Nuevo Correo");
    data[row].correo=correo;
    var fila_id7=document.getElementById("row"+row);
    celda=fila_id7.getElementsByTagName("td");
    celda[7].innerHTML=correo;

    var nacimiento=prompt("Nueva Fecha de Nacimiento");
    data[row].nacimiento=nacimiento;
    var fila_id8=document.getElementById("row"+row);
    celda=fila_id8.getElementsByTagName("td");
    celda[8].innerHTML=nacimiento;

    var genero=prompt("Nuevo Genere");
    data[row].genero=genero;
    var fila_id9=document.getElementById("row"+row);
    celda=fila_id9.getElementsByTagName("td");
    celda[9].innerHTML=genero;

    var tipouser=prompt("Nuevo Tipo de Usuario");
    data[row].tipouser=tipouser;
    var fila_id10=document.getElementById("row"+row);
    celda=fila_id10.getElementsByTagName("td");
    celda[10].innerHTML=tipouser;
}