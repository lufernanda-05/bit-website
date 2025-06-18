'use strict'
/*DOM */
const $h2 = document.getElementById('subtitle');

$h2.style.color='white';
$h2.style.backgroundColor='black';
const $root = window.document.getElementById('root');
const $p = window.document.createElement('p');

$p.textContent = ' párrafo en JavaScript';

$p.innerHTML = `<span>Hola, </span><strong>DEVS</strong>!`;

$root.appendChild($p);

$p.remove();

$root.innerHTML = `<button>Click me</button>`;

const $button = document.querySelector('button');

$button.addEventListener('click', () => {
  console.log('El usuario hizo click en el botón');
});