/**
 * HEADER SECTION
 */
const navlinks = document.querySelectorAll('header nav a');
const logolinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


const activePage = () => {
    const header = document.querySelector('header')
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);


    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });
    

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();


            link.classList.add('active');

            setTimeout (() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logolinks.addEventListener('click', () => {
    if (!navlinks[0].classList.contains('active')) {
        activePage();

        navlinks[0].classList.add('active');

        setTimeout (() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});


/**
 * RESUME SECTION
 */
const resumebtns = document.querySelectorAll('.resume-btn');

resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => { 
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumebtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


/**
 * PORTFOLIO SECTION
 */
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});