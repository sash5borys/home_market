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

// Open|Close Overlay Dashboard Menu
const dashboardMenu = document.querySelector('#overlay-dashboard-menu');
const openOverlayDashboardMenuButton = document.querySelector('#dashboard-menu-open-button');
const closeOverlayDashboardMenuButton = document.querySelector('#dashboard-menu-close-button');
openOverlayDashboardMenuButton.addEventListener('click', () => {
    dashboardMenu.style = 'width:65%;';
});
closeOverlayDashboardMenuButton.addEventListener('click', () => {
    dashboardMenu.style = 'width:0%;';
});
