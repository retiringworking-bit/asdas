const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

function enableDarkMode() {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeIcon.classList.remove('ph-moon');
    themeIcon.classList.add('ph-sun');
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeIcon.classList.remove('ph-sun');
    themeIcon.classList.add('ph-moon');
    localStorage.setItem('theme', 'light');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// Init theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});
