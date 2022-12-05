'use strict';

// All elements with the 'hidden' class
const allSections = document.querySelectorAll('.hidden');

// Show Homepage
document.querySelector('.section-0').classList.remove('hidden');

// navbar
const navbar = document.querySelector('.navbar');

// All navbar buttons
const allNavBtns = document.querySelectorAll('.btn-nav');

// Expand/Collapse button
const btnExpand = document.querySelector('.btn-expand');

// Q&A expand/collapse arrow
const btnQA = document.querySelector('.arr-down');

// All Q&A cards
const allQuestions = document.querySelectorAll('.question-wrapper');

// Expand/Collapse Q & A cards
allQuestions.forEach(question => {
    question.addEventListener('click', function () {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        this.classList.contains('active')
            ? (answer.style.display = 'block')
            : (answer.style.display = 'none');
    });
});

// Navbar toggle functionality
btnExpand.addEventListener('click', event => {
    if (navbar.classList.contains('nav-expanded')) {
        document.body.style = 'grid-template-columns: 40px 1160px;';
        event.target.innerText = '>';
        event.target.style = 'left: 40px';
        event.target.style.opacity = '70%';
        navbar.classList.remove('nav-expanded');

        allNavBtns.forEach(btn => (btn.style.display = 'none'));
    } else {
        document.body.style = 'grid-template-columns: 260px 940px;';
        event.target.innerText = '<';
        event.target.style = 'left: 260px';
        event.target.style.opacity = '100%';
        navbar.classList.add('nav-expanded');
        allNavBtns.forEach(btn => (btn.style.display = 'inline-block'));
    }
});

// Hide all elements and remove active FAQ questions
const hideElements = function () {
    allQuestions.forEach(q => {
        // q.classList.contains('active') && q.classList.remove('active');
    });
    allSections.forEach(section => {
        // if (!section.classList.contains('hidden')) {
        //     section.classList.add('hidden');
        // }
        if (section.style.display !== 'none') section.style.display = 'none';
    });
};

// Toggle section visibility
// Refactor this --V causing bugs
allNavBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        hideElements();
        for (let i = 0; i < allNavBtns.length; i++) {
            if (event.target.isEqualNode(allNavBtns[i])) {
                // allSections[i].classList.remove('hidden');
                allSections[i].style.display = 'block';
            }
        }
    });
});
