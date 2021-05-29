let btnNo = document.getElementById('btn-no');
let container = document.getElementById('container');

btnNo.addEventListener('mousemove', hadlerBtnNo);

let x;
let y;

let spaceWidth = container.offsetWidth;
let spaceHeight = container.offsetHeight;
let btnWidth = btnNo.offsetWidth;
let btnHeight = btnNo.offsetHeight;

let maxSpaceWidht = spaceWidth - btnWidth;
let maxSpaceHeight = spaceHeight - btnHeight;

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
