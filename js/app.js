//Constructores.

function Seguro(marca, year, tipo) {
  this.marca = marca
  this.year = year
  this.tipo = tipo
}

function UI() {}

UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector('#year');
  for (let i = max; i >= min; i--) {
    let option = document.createElement('OPTION');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option)
  };
}

//Mostrar alertas en pantalla.
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement('DIV');
  const formulario = document.querySelector('#cotizar-seguro')

  div.classList.add('mensaje', 'mt-10');
  if (tipo == 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }
  div.textContent = mensaje;

  //Insertar en el HTML.
  formulario.insertBefore(div, document.querySelector('#resultado'));
  setTimeout(() => {
    div.remove();
  }, 3000);
}

//Instanciar UI.
const ui = new UI();

document.addEventListener('DOMContentLoaded', ()=>{
  ui.llenarOpciones();
})

eventListeners();
function eventListeners() {
  const formulario = document.querySelector('#cotizar-seguro')
  formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e) {
  e.preventDefault();
  //Leer la marca seleccionada.
  const marca = document.querySelector('#marca').value;
  //Leer el year seleccionada.
  const year = document.querySelector('#year').value;
  //Leer la cobertura seleccionada.
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if ( marca === '' || year === '' || tipo === '') {
    ui.mostrarMensaje('Todos los campos son obligatorios.', 'error');
    return;
  } 
  ui.mostrarMensaje('No te vayas, estamos cotizando tu seguro.', 'correcto');

  //Instanciar el seguro.

  //Utilizar el Prototipe parac calcular el valor del seguro.
}