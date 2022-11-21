'use strict';

// All elements with the 'hidden' class
const allSections = document.querySelectorAll('.hidden');
// Show Homepage
document.querySelector('.section-0').classList.remove('hidden');

// navbar
const navbar = document.querySelector('.navbar');

// All navbar buttons
const allNavBtns = document.querySelectorAll('.btn-nav');
console.log(allNavBtns);

// Expand/Collapse button
const btnExpand = document.querySelector('.btn-expand');

// Navbar toggle functionality
btnExpand.addEventListener('click', event => {
    if (navbar.classList.contains('nav-expanded')) {
        document.body.style = 'grid-template-columns: 40px auto;';
        event.target.innerText = '>';
        event.target.style.opacity = '70%';
        navbar.classList.remove('nav-expanded');

        allNavBtns.forEach(btn => (btn.style.display = 'none'));
    } else {
        document.body.style = 'grid-template-columns: 260px auto;';
        event.target.innerText = '<';
        event.target.style.opacity = '100%';
        navbar.classList.add('nav-expanded');
        allNavBtns.forEach(btn => (btn.style.display = 'inline-block'));
    }
});

// Hide all elements
const hideElements = function () {
    allSections.forEach(section => {
        if (!section.classList.contains('hidden')) {
            section.classList.add('hidden');
        }
    });
};

// Toggle section visibility
allNavBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        hideElements();
        for (let i = 0; i < allNavBtns.length; i++) {
            if (event.target.isEqualNode(allNavBtns[i])) {
                allSections[i].classList.remove('hidden');
            }
        }
    });
});
