const casesTabs = document.querySelectorAll('.cases-tab');
const casesItems = document.querySelectorAll('.cases-body');

casesTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        casesTabs.forEach(t => t.classList.remove('active'));
        casesItems.forEach(item => item.classList.remove('active'));

        tab.classList.add('active');
        casesItems[index].classList.add('active');
    });
});