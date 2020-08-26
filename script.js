const toggleSwitch  = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].innerHTML = 'Dark Mode';
    toggleIcon.children[1].className = 'fas fa-moon';
    image1.src = image1.src.replace('light', 'dark');
    image2.src = image2.src.replace('light', 'dark');
    image3.src = image3.src.replace('light', 'dark');
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].innerHTML = 'Light Mode';
    toggleIcon.children[1].className = 'fas fa-sun';
    image1.src = image1.src.replace('dark', 'light');
    image2.src = image2.src.replace('dark', 'light');
    image3.src = image3.src.replace('dark', 'light');

}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Add event listenner
toggleSwitch.addEventListener('change', switchTheme);