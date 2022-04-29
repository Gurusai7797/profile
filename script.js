// let ll = document.getElementById('logo');

// for (let i = 0; i <= 90; i++) {
//   const newImg = document.createElement('img');
//   newImg.src = `https://randomuser.me/api/portraits/women/${i}.jpg`;
//   ll.appendChild(newImg);
// }

const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const model = document.getElementById('model');

// toggle nav

toggle.addEventListener(
  'click',
  () => document.body.classList.toggle('show-nav') // here toggle is js element not the variable or class
);

//show model

open.addEventListener('click', () => model.classList.add('show-model'));

//hide model

close.addEventListener('click', () => model.classList.remove('show-model'));

//hide modal on ouutside click

window.addEventListener('click', (e) =>
  e.target == model ? model.classList.remove('show-model') : false
);
