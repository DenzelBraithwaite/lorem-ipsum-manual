'use strict';

const sectionHome = document.querySelector('.section-home');
const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', () => {
    console.log('clicked!');
    sectionHome.classList.toggle('hidden');
});
