'use strict';

// All elements with the 'hidden' class

const allSections = document.querySelectorAll('.hidden');
// Show Homepage
document.querySelector('.section-0').classList.remove('hidden');

// All navbar buttons
const allNavBtns = document.querySelectorAll('.btn-nav');

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
        console.log(event.target.isEqualNode(allNavBtns[0]));
        for (let i = 0; i < allNavBtns.length; i++) {
            if (event.target.isEqualNode(allNavBtns[i])) {
                allSections[i].classList.remove('hidden');
            }
        }
    });
});
