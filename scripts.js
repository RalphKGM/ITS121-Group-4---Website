document.getElementById('productsMenu').addEventListener('click', function() {
    const bottomNavbar = document.querySelector('.bottom-navbar');
    const caretIcon = document.getElementById('caretIcon');
    
    bottomNavbar.classList.toggle('active'); 
    
    if (bottomNavbar.classList.contains('active')) {
        caretIcon.classList.remove('fa-caret-down');
        caretIcon.classList.add('fa-caret-up');
    } else {
        caretIcon.classList.remove('fa-caret-up');
        caretIcon.classList.add('fa-caret-down');
    }
});

/* 
document.querySelectorAll('.bottom-navbar .nav-link').forEach(link => {
    link.addEventListener('mouseover', function() {
        const id = link.id + 'Image';
        const image = document.querySelector(`#${id}`);
        if (image) {
            image.classList.add('show');
        }
    });

    link.addEventListener('mouseout', function() {
        const id = link.id + 'Image';
        const image = document.querySelector(`#${id}`);
        if (image) {
            image.classList.remove('show');
        }
    });
}); */

// scroll navbar anim
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//products menu navbar
const productsMenu = document.getElementById('productsMenu');
const bottomNavbar = document.querySelector('.bottom-navbar');
const caretIcon = document.getElementById('caretIcon');

let hoverTimeout;

//show bottom navbar
productsMenu.addEventListener('mouseenter', function () {
    clearTimeout(hoverTimeout);
    bottomNavbar.classList.add('active');
    caretIcon.classList.remove('fa-caret-down');
    caretIcon.classList.add('fa-caret-up');
});

//hide bottom navbar when no hover
productsMenu.addEventListener('mouseleave', function () {
    hoverTimeout = setTimeout(() => {
        bottomNavbar.classList.remove('active');
        caretIcon.classList.remove('fa-caret-up');
        caretIcon.classList.add('fa-caret-down');
    }, 300); // delay, change if u want it slow 
});

//bottom navbar stay while mouse hover
bottomNavbar.addEventListener('mouseenter', function () {
    clearTimeout(hoverTimeout);
    bottomNavbar.classList.add('active');
});

bottomNavbar.addEventListener('mouseleave', function () {
    hoverTimeout = setTimeout(() => {
        bottomNavbar.classList.remove('active');
        caretIcon.classList.remove('fa-caret-up');
        caretIcon.classList.add('fa-caret-down');
    }, 300); // delay, change if u want it slow 
});

document.addEventListener("DOMContentLoaded", function () {
    let myCarousel = document.querySelector("#heroCarousel");
    let prevButton = document.querySelector(".carousel-control-prev");
    let nextButton = document.querySelector(".carousel-control-next");

    if (myCarousel) {
        let carousel = new bootstrap.Carousel(myCarousel, {
            interval: false,  // Stops auto-sliding for manual control
            wrap: true,
            touch: true      // Enable touch swipe support
        });

        prevButton.addEventListener("click", function () {
            carousel.prev();
        });

        nextButton.addEventListener("click", function () {
            carousel.next();
        });
    }
});
