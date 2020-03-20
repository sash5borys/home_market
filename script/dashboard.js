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
