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
    console.log('No paso la validacion.');
  } else {
    console.log('Si paso la validacion.');
  }
}