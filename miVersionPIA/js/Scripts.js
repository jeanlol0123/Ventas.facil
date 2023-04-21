// Obtiene el botón "Agregar" y le asigna un evento "click"
var btnAgregar = document.querySelector('.agregar');
btnAgregar.addEventListener('click', function() {
  // Crea un nuevo elemento "div" y le asigna una clase
  var nuevoDiv = document.createElement('div');
  nuevoDiv.className = 'contenedorInputs';
  // Crea dos nuevos elementos "input" y les asigna un placeholder
  var nuevoInput1 = document.createElement('input');
  nuevoInput1.type = 'text';
  nuevoInput1.placeholder = 'Introduzca los valores';
  var nuevoInput2 = document.createElement('input');
  nuevoInput2.type = 'text';
  nuevoInput2.placeholder = 'Introduzca los valores';
  // Agrega los elementos "input" al nuevo elemento "div"
  nuevoDiv.appendChild(nuevoInput1);
  nuevoDiv.appendChild(nuevoInput2);
  // Agrega el nuevo elemento "div" al documento
  var seccionTabla = document.querySelector('.seccionTabla');
  seccionTabla.insertBefore(nuevoDiv, btnAgregar);
});
function addInputs() {
  var btnAgregar = document.querySelector('.agregar');
  btnAgregar.addEventListener('click', function() {
  });
}
