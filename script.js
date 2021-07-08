// import Swal from 'sweetalert2';

let btn1 = document.getElementById('Principal-button');
let btnYes = document.getElementById('btn-yes');
let btnNo = document.getElementById('btn-no');
let container = document.getElementById('container');

// btnNo.addEventListener('mousemove', hadlerBtnNo);
// btnYes.addEventListener('dblclick', handlerBtnYes);

// if (screen.width === 500) {
//   btnNo.removeEventListener('mousemove', hadlerBtnNo);
//   btnNo.addEventListener('click', hadlerBtnNo);
// }

/////------CLASS CREATION-------

class Logic {
  constructor() {
    // this.initialize = this.initialize.bind(this); /// Ka?
    this.initialize();
    this.getMaxSizes();
  }

  initialize() {
    this.btnNo = btnNo;
    this.btnYes = btnYes;
    this.btn1 = btn1;
    // this.message1();
    // this.activeEvents = this.activeEvents.bind(this);
    this.activeFirstButton();
    // this.hadlerBtnNo = this.hadlerBtnNo.bind(this);
    // this.message2 = this.message2.bind(this);
  }

  activeFirstButton() {
    this.btn1.addEventListener('click', this.firstMessage);
    this.activeChoices();
  }

  firstMessage() {
    // this.message1();
    btn1.style.opacity = 0;
    setTimeout(() => {
      btn1.style.display = 'none';
    }, 500);
  }

  activeChoices() {
    this.btnNo.addEventListener('click', this.hadlerBtnNo);
    this.btnYes.addEventListener('click', this.message2);

    // if (screen.width === 500) {
    //   this.btnNo.removeEventListener('mousemove', this.hadlerBtnNo);
    //   this.btnNo.addEventListener('click', this.hadlerBtnNo);
    // }
  }

  getMaxSizes() {
    let spaceWidth = container.offsetWidth;
    let spaceHeight = container.offsetHeight;
    let btnWidth = btnNo.offsetWidth;
    let btnHeight = btnNo.offsetHeight;

    let maxSpaceWidht = spaceWidth - btnWidth;
    let maxSpaceHeight = spaceHeight - btnHeight;
    return maxSpaceHeight, maxSpaceWidht;
  }

  hadlerBtnNo() {
    alert('test');
  }

  message1() {
    alert('Hola, como estas?');
    // alert('Desde hace mucho eh querido preguntarte esto');
    // alert('Me ah costado mucho valor decirte esto, pero...');
    // alert('Te gustaria salir en una cita conmigo?');
    // alert('Para tomar tu respuesta da doble click en Si o no');
  }

  message2() {
    alert('Enserio!!, Oh si, presentia que dirias que si');
    alert('Ya te contacto por via mail');
  }
}

/////------CLASS CREATION-------

let x, y;

// let spaceWidth = container.offsetWidth;
// let spaceHeight = container.offsetHeight;
// let btnWidth = btnNo.offsetWidth;
// let btnHeight = btnNo.offsetHeight;

// let maxSpaceWidht = spaceWidth - btnWidth;
// let maxSpaceHeight = spaceHeight - btnHeight;

// function hadlerBtnYes() {
//   alert('Enserio!!, Oh si, presentia que dirias que si');
//   alert('Ya te contacto por via mail');
// }

// function hadlerBtnNo() {
//   positionRandom();
//   btnNo.style.left = x + 'px';
//   btnNo.style.top = y + 'px';
// }

// function positionRandom() {
//   x = Math.floor(Math.random() * (maxSpaceWidht - 0 + 1) + 0);
//   y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
//   return x, y;
// }

// window.logic = new Logic();
const start = new Logic();
// start = 1;
// console.log(window.logic);
