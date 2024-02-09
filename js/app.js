//Constructores.

function Seguro(marca, year, tipo) {
  this.marca = marca
  this.year = year
  this.tipo = tipo
}

//Realiza la contizacon con los datos del seguro.
Seguro.prototype.cotizarSeguro = function () {
  /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
  */

  let cantidad;
  const base = 2000;
  switch (this.marca) {
    case '1':
      cantidad = base * 1.15
      break;
    case '2':
      cantidad = base * 1.05
      break;
    case '3':
      cantidad = base * 1.35  
      break;
  
    default:
      break;
  }

  //Leer el año.
  const dif = new Date().getFullYear() - this.year;

  //Cada año que reduzca reduce el 3% del valor del seguro.
  cantidad -= ( ( dif * 3 ) * cantidad ) / 100

  /*
    Si el seguro es basico se incrementa un 30% mas.
    Si el seguro es completo se incrementa un 50% mas.
  */

  if ( this.tipo === 'basico') {
    cantidad *= 1.30;
  } else {
    cantidad *= 1.50;
  };

  return cantidad;

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
  const seguro = new Seguro(marca, year, tipo)
  seguro.cotizarSeguro();

  //Utilizar el Prototipe parac calcular el valor del seguro.
}