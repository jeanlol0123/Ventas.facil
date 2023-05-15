function validar_num(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
    return true;
    }
    return false;        
}

var btnAgregar=document.getElementById('agregar');
var lista=document.getElementById('lista');
var data=[];
var cant=0;

const modi = document.getElementById('modifar');

btnAgregar.addEventListener('click', agregar);

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
    var fila='<tr id='+id_row+'><td>'+codigo+'</td><td>'+nombre+'</td><td>'+identificacion+'</td><td>'+direccion+'</td><td>'+telefono+'</td><td>'+usuario+'</td><td>'+contraseña+'</td><td>'+correo+'</td><td>'+nacimiento+'</td><td>'+genero+'</td><td>'+tipouser+'</td><td><a href="#" class="btn btn-warning " id="modif" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onclick="modificar('+cant+');">Modificar</a><a href="#" class="btn btn-danger" id="elimi"  onclick="eliminar('+cant+');">Eliminar</a></td></tr>';
    
    
    


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


// boton para modificar


function modificar(row){
    
    


    var codi=document.getElementById('codigo-').value;
    data[row].codigo=codi;
    var fila_id0=document.getElementById("row"+row);
    celda=fila_id0.getElementsByTagName("td");
    celda[0].innerHTML=codi;

    var nombe=document.getElementById('nombre-').value;
    data[row].nombre=nombe;
    var fila_id1=document.getElementById("row"+row);
    celda=fila_id1.getElementsByTagName("td");
    celda[1].innerHTML=nombe;

    var identi=parseFloat(document.getElementById('identificacion-').value);
    data[row].identificacion=identi;
    var fila_id2=document.getElementById("row"+row);
    celda=fila_id2.getElementsByTagName("td");
    celda[2].innerHTML=identi;

    var direc=document.getElementById('direccion-').value;
    data[row].direccion=direc;
    var fila_id3=document.getElementById("row"+row);
    celda=fila_id3.getElementsByTagName("td");
    celda[3].innerHTML=direc;

    var tel=parseFloat(document.getElementById('telefono-').value);
    data[row].telefono=tel;
    var fila_id4=document.getElementById("row"+row);
    celda=fila_id4.getElementsByTagName("td");
    celda[4].innerHTML=tel;

    var user=document.getElementById('usuario-').value;
    data[row].usuario=user;
    var fila_id5=document.getElementById("row"+row);
    celda=fila_id5.getElementsByTagName("td");
    celda[5].innerHTML=user;

    var contra=document.getElementById('contraseña-').value;
    data[row].contraseña=contra;
    var fila_id6=document.getElementById("row"+row);
    celda=fila_id6.getElementsByTagName("td");
    celda[6].innerHTML=contra;

    var correo=document.getElementById('correo-').value;
    data[row].correo=correo;
    var fila_id7=document.getElementById("row"+row);
    celda=fila_id7.getElementsByTagName("td");
    celda[7].innerHTML=correo;

    var nacimiento=document.getElementById('nacimiento-').value;
    data[row].nacimiento=nacimiento;
    var fila_id8=document.getElementById("row"+row);
    celda=fila_id8.getElementsByTagName("td");
    celda[8].innerHTML=nacimiento;

    var genero=document.getElementById('genero-').value;
    data[row].genero=genero;
    var fila_id9=document.getElementById("row"+row);
    celda=fila_id9.getElementsByTagName("td");
    celda[9].innerHTML=genero;

    var tipouser=document.getElementById('tipouser-').value;
    data[row].tipouser=tipouser;
    var fila_id10=document.getElementById("row"+row);
    celda=fila_id10.getElementsByTagName("td");
    celda[10].innerHTML=tipouser;

}





//para que sirve?

// const abriMenu = document.querySelector("#ag");
// const cerrarMenu = document.querySelector("#agregar");
// const modal = document.querySelector("#modal");

// abriMenu.addEventListener("click", ()=>{
//     modal.showModal();
// });

// cerrarMenu.addEventListener("click",()=>{
//     modal.close();
// });