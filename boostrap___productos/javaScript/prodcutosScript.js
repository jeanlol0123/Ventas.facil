// Obtener referencia al botón de añadir fila y a la tabla
const addButton = document.querySelector('#button-container button');
const table = document.querySelector('table');

// Añadir evento click al botón de añadir fila
addButton.addEventListener('click', () => {
  // Crear una nueva fila
  const newRow = document.createElement('tr');
  
  // Crear las celdas de la fila
  const checkboxCell = document.createElement('td');
  const codeCell = document.createElement('td');
  const productCell = document.createElement('td');
  const supplierCell = document.createElement('td');
  const quantityCell = document.createElement('td');
  const priceCell = document.createElement('td');
  const actionCell = document.createElement('td');

  // Añadir los elementos a las celdas de la fila
  checkboxCell.innerHTML = '<input type="checkbox">';
  codeCell.textContent = 'nuevo';
  productCell.textContent = 'nuevo';
  supplierCell.textContent = 'nuevo';
  quantityCell.textContent = 'nuevo';
  priceCell.textContent = 'nuevo';
  actionCell.innerHTML = `
    <span class="button">
      <button>
        <img src="public/images/editfilebutton570-6bvo-200w.png" alt="Editar">
      </button>
    </span>
    <span class="button">
      <button>
        <img src="public/images/trashcanbutton571-df3h-200h.png" alt="Borrar">
      </button>
    </span>
  `;

  // Añadir las celdas a la fila
  newRow.appendChild(checkboxCell);
  newRow.appendChild(codeCell);
  newRow.appendChild(productCell);
  newRow.appendChild(supplierCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(actionCell);

  // Añadir la fila a la tabla
  table.appendChild(newRow);
});