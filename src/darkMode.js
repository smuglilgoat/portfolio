// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
let systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.documentElement.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');

  darkModeToggle.innerHTML = "🌞";
  darkModeToggle.classList.add("bg-orange-400", "hover:bg-orange-200");
  darkModeToggle.classList.remove("bg-gray-900", "hover:bg-gray-600");
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.documentElement.classList.remove('dark');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);

  darkModeToggle.innerHTML = "🌚";
  darkModeToggle.classList.add("bg-gray-900", "hover:bg-gray-600");
  darkModeToggle.classList.remove("bg-orange-400", "hover:bg-orange-200");
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
