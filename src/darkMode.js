// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
let systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.documentElement.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');

  darkModeToggle.innerHTML = "<img src=\"src/sun-with-face_1f31e.png\" class=\"w-5 h-5\">";
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.documentElement.classList.remove('dark');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);

  darkModeToggle.innerHTML = "<img src=\"src/first-quarter-moon-with-face_1f31b.png\" class=\"w-5 h-5\">";
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled' || systemDarkMode) {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
