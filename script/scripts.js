// Open|Close Overlay Mobile Menu
const mobileMenu = document.querySelector('#overlay-mobile-menu');
const openOverlayMobileMenuButton = document.querySelector('#mobile-menu-open-button');
const closeOverlayMobileMenuButton = document.querySelector('#mobile-menu-close-button');
openOverlayMobileMenuButton.addEventListener('click', () => {
    mobileMenu.style = 'width:65%;';
});
closeOverlayMobileMenuButton.addEventListener('click', () => {
    mobileMenu.style = 'width:0%;';
});

// Open|Close Overlay Catalog Menu
const catalogMenu = document.querySelector('.catalog-menu');
const overlayCatalogMenu = document.querySelector('#overlay-catalog-menu');
const openOverlayCatalogButton = document.querySelector('#catalog-menu-open-button');
openOverlayCatalogButton.addEventListener('click', () => {
    overlayCatalogMenu.style = 'height: auto;';
});
document.addEventListener('click', event => {
    if (!catalogMenu.contains(event.target)) overlayCatalogMenu.style = 'height: 0;';
});

// Carousel
function Carousel(carousel) {
    if (!(carousel instanceof Element)) throw new Error('No slider passed in');
    const carouselContent = carousel.querySelector('.carousel-content');
    // eslint-disable-next-line prefer-const
    let countSlides;
    let initialWidth = 0;
    let widthOfSlide;
    let firstSlide;
    let lastSlide;
    let firstSlideClone;
    let lastSlideClone;
    let canMoving = true;

    const prevButton = carousel.querySelector('.carousel-nav-left');
    const nextButton = carousel.querySelector('.carousel-nav-right');

    function init() {
        countSlides = carousel.dataset.countSlides
            ? carousel.dataset.countSlides
            : carousel.dataset.minSize
            ? Math.floor(window.innerWidth / carousel.dataset.minSize)
            : 1;
        widthOfSlide = carousel.offsetWidth / countSlides;
        firstSlide = carouselContent.firstElementChild;
        lastSlide = carouselContent.lastElementChild;
        firstSlideClone = firstSlide.cloneNode(true);
        lastSlideClone = lastSlide.cloneNode(true);
    }

    function addBefore() {
        carouselContent.insertBefore(lastSlideClone, firstSlide);
    }

    function addAfter() {
        carouselContent.insertBefore(firstSlideClone, lastSlide.nextSibling);
    }

    function removeBefore() {
        carouselContent.firstElementChild.remove();
    }

    function removeAfter() {
        carouselContent.lastElementChild.remove();
    }

    // Paste style to every slide
    function makeSlides() {
        carouselContent.querySelectorAll('.slide').forEach((el, index) => {
            el.style.cssText += `width:${widthOfSlide}px;`;
            el.style.cssText += `background-color:${el.dataset.bgOfSlide};`;
            if (index == 0) {
                el.style.cssText += `left:${-widthOfSlide}px;`;
            } else {
                el.style.cssText += `left:${initialWidth}px;`;
                initialWidth += widthOfSlide;
            }
            setTimeout(function() {
                el.style.cssText += 'transition: all .4s;';
                canMoving = true;
            }, 1000);
        });
        initialWidth = 0;
    }

    function move(direction) {
        init();
        if (canMoving) {
            canMoving = false;
            if (direction === 'back') {
                addBefore();
                removeAfter();
            } else if (direction === 'forward') {
                addAfter();
                removeBefore();
            }
        }
        makeSlides();
    }

    init();
    makeSlides();

    // Initial carousel when window resized
    window.addEventListener('resize', function() {
        init();
        makeSlides();
    });

    // Navigate event listeners
    prevButton.addEventListener('click', () => {
        move('back');
    });
    nextButton.addEventListener('click', () => {
        move('forward');
    });

    // Make scroll automaticaly
    if (carousel.classList.contains('slider')) {
        setInterval(() => {
            move('forward');
        }, 5000);
    }
}
