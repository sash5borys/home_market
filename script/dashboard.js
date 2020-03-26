// Open|Close Accordion
const accordion = document.querySelectorAll('.accordion');
accordion.forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

// Open|Close Tabs
const tabsSection = document.querySelector('.tabs-section');
const tabButtons = tabsSection.querySelectorAll('.tab');
const tabPanels = Array.from(tabsSection.querySelectorAll('.tab-panel'));
function handleTabClick(e) {
    // Mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });
    // Hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // Mark the clicked tab as selected
    e.currentTarget.setAttribute('aria-selected', true);
    // Find the associated tabPanel and show it!
    const { id } = e.currentTarget;
    // Find in the array of tabPanels
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelled') === id);
    tabPanel.hidden = false;
}
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

// Dropdown Checkboxes
function DropdownCheckbox(dropdown) {
    if (!(dropdown instanceof Element)) throw new Error('No dropdown passed in');
    const productCategories = dropdown.querySelector('#product-categories');
    // eslint-disable-next-line prefer-const
    let arrDataProductCategories = productCategories.dataset.arrProductCategories.replace(/\s/g, '').split(',');
    let arrTitleProductCategories = productCategories.innerHTML.split(',').map(el => el.trim());
    const checkboxes = dropdown.querySelectorAll('.checkbox');

    // Open dropdown list
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    checkboxes.forEach((checkbox, index) => {
        const input = checkbox.querySelector('input');
        const label = checkbox.querySelector('label');

        // Handle dropdown list input checked
        input.addEventListener('change', () => {
            if (input.checked) {
                arrDataProductCategories.push(input.value);
                arrTitleProductCategories.push(label.innerHTML);
            } else {
                arrDataProductCategories = arrDataProductCategories.filter(code => code !== input.value);
                arrTitleProductCategories = arrTitleProductCategories.filter(title => title !== label.innerHTML);
            }
            productCategories.dataset.arrProductCategories = arrDataProductCategories.join(',');
            productCategories.innerHTML = arrTitleProductCategories.join(', ');
        });
    });

    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
    });
}
const productCategory = DropdownCheckbox(document.querySelector('#product-category'));
