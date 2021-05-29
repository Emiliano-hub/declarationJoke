alert('Hola, como estas?');
alert('Desde hace mucho eh querido preguntarte esto');
alert('Me ah costado mucho valor decirte esto, pero...');
alert('Te gustaria salir en una cita conmigo?');

let btnYes = document.getElementById('btn-yes');
let btnNo = document.getElementById('btn-no');
let container = document.getElementById('container');

btnNo.addEventListener('mousemove', hadlerBtnNo);
btnYes.addEventListener('click', hadlerBtnYes);

if (screen.width === 500) {
  btnNo.removeEventListener('mousemove', hadlerBtn);
  btnNo.addEventListener('click', hadlerBtn);
}

let x;
let y;

let spaceWidth = container.offsetWidth;
let spaceHeight = container.offsetHeight;
let btnWidth = btnNo.offsetWidth;
let btnHeight = btnNo.offsetHeight;

let maxSpaceWidht = spaceWidth - btnWidth;
let maxSpaceHeight = spaceHeight - btnHeight;

function hadlerBtnYes() {
  alert('Enserio!!, Oh si, presentia que dirias que si');
  alert('Ya te contacto por via mail');
}

function hadlerBtnNo() {
  positionRandom();
  btnNo.style.left = x + 'px';
  btnNo.style.top = y + 'px';
}

function positionRandom() {
  x = Math.floor(Math.random() * (maxSpaceWidht - 0 + 1) + 0);
  y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
  return x, y;
}
