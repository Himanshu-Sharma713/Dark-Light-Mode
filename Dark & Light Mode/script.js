const fullDarkModeChecked = document.querySelector('#full-dark-mode');
const container = document.querySelector('.container');
const containDarkModeChecked = document.querySelector('#contain-dark-mode');


fullDarkModeChecked.addEventListener('change', (e) => {
    if (fullDarkModeChecked.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    containDarkModeChecked.checked = fullDarkModeChecked.checked;
});


containDarkModeChecked.addEventListener('change', () => {
    if (containDarkModeChecked.checked) {
        container.classList.add('dark');
    } else {
        container.classList.remove('dark');
    }
});
