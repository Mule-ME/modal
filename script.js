'use strict';

const modal = document.querySelector('.modal');
const overelay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overelay.classList.remove('hidden');
  });

const closeModal = function () {
  modal.classList.add('hidden');
  overelay.classList.add('hidden');
};

/*Or in other way
const closeModal = () => {
  modal.classList.add('hidden');
  overelay.classList.add('hidden');
};
*/

btnCloseModal.addEventListener('click', closeModal);
overelay.addEventListener('click', closeModal);

//Listening keyboard key events
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
