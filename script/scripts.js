// Open|Close Overlay Catalog Menu
const catalogMenu = document.querySelector('.catalog-menu');
const overlayCatalogOpenButton = document.querySelector('#catalog-menu-open-button');
const overlayCatalogMenu = document.querySelector('#overlay-catalog-menu');
overlayCatalogOpenButton.addEventListener('click', () => {
    overlayCatalogMenu.style = 'height: auto;';
});
document.addEventListener('click', event => {
    if (!catalogMenu.contains(event.target)) overlayCatalogMenu.style = 'height: 0;';
});
