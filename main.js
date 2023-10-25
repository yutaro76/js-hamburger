'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.remove('hide');
  });
}
