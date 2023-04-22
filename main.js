//codigo js primero se declaran las varibles de los botones, la lista(tabla) y se crea el array que contiene los datos 
var boton = document.getElementById('agregar');
var guardar = document.getElementById('guardar');
var lista = document.getElementById('lista');
var data = [];
var cant=0;
//se definen los botones de agregar y guardar los registros
boton.addEventListener('click', agregar);
boton.addEventListener('click', save);
//se crea la funcion para agregar los valores a los campos del formulario
function agregar(){
    var codigo = parseInt(document.getElementById('codigo').value);
    var nombre = document.getElementById('nombre').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var total = precio*parseFloat(cantidad);
    //agregar datos al array
    data.push(
        {
            "id": cant,
            "codigo": codigo,
            "nombre": nombre,
            "precio": precio,
            "cantidad": cantidad,
            "total": total
        }
    );
    //se crean los botenes de accion eliminar y modificar
    var id_row= 'row'+cant;
    var fila='<tr id='+id_row+'><td>'+codigo+'</td><td>'+nombre+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+total+'</td><td><a href="#" class="btn btn-warning" onclick="modificar('+cant+')";>Modificar</a><a href="#" class=" btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a></td></tr>'; 
    //agregar a la tabla
    $("#lista").append(fila);
    //limpiar los campos del formulario
    $("#codigo").val('');
    $("#nombre").val('');
    $("#precio").val('');
    $("#cantidad").val('');
    $("#codigo").focus();
    cant++; 
    sumar();
}



// funcion para sumar 
function sumar(){
    var tot=0;
    for(x of data){
        tot = tot+x.total;
    }
    document.getElementById('total').innerHTML ="total  "+tot;
}
//funcion para eliminar 
function eliminar(row){
    //remover la fila de la tabla
    $("#row"+row).remove();
    var i=0;
    var pos=0;
    var dato_elimiado = [];
    for (x of data){
        if(x.id==row){
            pos = i;
        }
        i++;
    }
    //guardar el dato eliminado para posteriormente inhabilitarlo en la base de datos
    dato_elimiado.push.apply(dato_elimiado,data);

    data.splice(pos,1);
    sumar();
    console.log(dato_elimiado);
}

function modificar(row){
    
    var codi=prompt("Nuevo Codigo");
    data[row].codigo=codi;
    var fila_id0=document.getElementById("row"+row);
    celda=fila_id0.getElementsByTagName("td");
    celda[0].innerHTML=codi;
    
    var nombe=prompt("Nuevo Nombre");
    data[row].nombre=nombe;
    var fila_id1=document.getElementById("row"+row);
    celda=fila_id1.getElementsByTagName("td");
    celda[1].innerHTML=nombe;
    
    var preci=parseFloat(prompt("Nuevo Precio"));
    data[row].precio=preci;
    data[row].total=data[row].cantidad*data[row].precio;
    var fila_id2=document.getElementById("row"+row);
    celda=fila_id2.getElementsByTagName("td");
    celda[2].innerHTML=preci;
    celda[4].innerHTML=data[row].total;
    
    var canti=parseFloat(prompt("Nueva Cantidad"));
    data[row].cantidad=canti;
    data[row].total=data[row].cantidad*data[row].precio;
    var fila_id3=document.getElementById("row"+row);
    celda=fila_id3.getElementsByTagName("td");
    celda[3].innerHTML=canti;
    celda[4].innerHTML=data[row].total;
    sumar();
}

function save(){
    var json= JSON.stringify(data);
    $.ajax({
            type: 'POST',
            url: 'api.php',
            data: "json="+json,
            success: function (respo) {
                location.reload();
    }
    });
}