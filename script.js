let btn1 = document.getElementById('Principal-button');
let btnYes = document.getElementById('btn-yes');
let btnNo = document.getElementById('btn-no');
let container = document.getElementById('container');
let x, y;
let maxSpaceHeight, maxSpaceWidht;

// if (screen.width === 500) {
//   btnNo.removeEventListener('mousemove', hadlerBtnNo);
//   btnNo.addEventListener('click', hadlerBtnNo);
// }

/////------CLASS CREATION-------

class Logic {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.btnNo = btnNo;
    this.btnYes = btnYes;
    this.btn1 = btn1;
    console.log(this);
    this.maxSpaceWidht = maxSpaceWidht;
    this.maxSpaceHeight = maxSpaceHeight;
    this.activeFirstButton();
  }

  activeFirstButton() {
    this.btn1.addEventListener('click', this.firstMessage.bind(this));
    this.activeChoices();
  }

  firstMessage() {
    this.message1();
    btn1.style.opacity = 0;
    setTimeout(() => {
      btn1.style.display = 'none';
    }, 500);
  }

  activeChoices() {
    this.btnNo.addEventListener('mousemove', this.hadlerBtnNo.bind(this));
    this.btnYes.addEventListener('dblclick', this.message2);

    // if (screen.width === 500) {
    //   this.btnNo.removeEventListener('mousemove', this.hadlerBtnNo);
    //   this.btnNo.addEventListener('click', this.hadlerBtnNo);
    // }
  }

  hadlerBtnNo() {
    this.getMaxSizes();
    this.positionRandom();
    console.log(this.x, this.y);
    this.btnNo.style.left = this.x + 'px';
    this.btnNo.style.top = this.y + 'px';
  }

  positionRandom() {
    this.x = Math.floor(Math.random() * (this.maxSpaceWidht - 0 + 1) + 0);
    this.y = Math.floor(Math.random() * (this.maxSpaceHeight - 0 + 1) + 0);
    console.log(this.x, this.y);
    return x, y;
  }

  getMaxSizes() {
    let spaceWidth = container.offsetWidth;
    let spaceHeight = container.offsetHeight;
    let btnWidth = btnNo.offsetWidth;
    let btnHeight = btnNo.offsetHeight;

    this.maxSpaceWidht = spaceWidth - btnWidth;
    this.maxSpaceHeight = spaceHeight - btnHeight;
    return maxSpaceHeight, maxSpaceWidht;
  }

  async message1() {
    let message1 = await swal.fire('Hola, como estas?');
    let message2 = await swal.fire(
      'Desde hace mucho tiempo que te veo, escucho y hablo contigo y ya no puedo esconder estos sentimientos tan desbordantes que siento hacia vos...'
    );
    let message3 = await swal.fire(
      'Fue dificil encontrar tales palabras para decirte lo que siento y representar a la vez mis sentimienos asi que despues de tanto reflexionar, tanto cuestionar, tome mi desicion.'
    );
    let message4 = await swal.fire(
      'Me ah costado mucho poder decirte esto, pero...'
    );
    let message5 = await swal.fire('¿Te gustaria salir en una cita conmigo?');
    let message6 = await swal.fire(
      'Para tomar tu respuesta da doble click en Si o no'
    );
  }

  async message2() {
    let message1 = await swal.fire(
      'Enserio!!, Oh si, presentia que dirias que si'
    );
    let message2 = await swal.fire('No sabes lo feliz que me siento 😊');
    let message3 = await swal.fire('En breve me estaré contactando contigo');
  }
}

/////------CLASS CREATION-------

const start = new Logic();
