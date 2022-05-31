// check for saved 'lang' in localStorage
let lang = localStorage.getItem('lang'); 

const langToggle = document.querySelector('#lang-toggle');

const switchFrench = () => {
  // 1. Update lang in localStorage
  localStorage.setItem('lang', 'fr');

  langToggle.innerHTML = "<img src=\"src/us.png\" class=\"w-5 h-5\">";
  langToggle.classList.remove('bg-blue-700', 'hover:bg-blue-400');
  langToggle.classList.add('bg-white', 'hover:bg-gray-200');
}

const switchEnglish = () => {
    // 1. Update lang in localStorage
    localStorage.setItem('lang', 'en');
  
    langToggle.innerHTML = "<img src=\"src/fr.png\" class=\"w-5 h-5\">";
    langToggle.classList.remove('bg-white', 'hover:bg-gray-200');
    langToggle.classList.add('bg-blue-700', 'hover:bg-blue-400');
  }
 
// If the user already visited and enabled darkMode
// start things off with it on
if (lang === 'fr' ) {
    switchFrench();
}

// When someone clicks the button
langToggle.addEventListener('click', () => {
    console.log("clicked", lang);
  // get their darkMode setting
  lang = localStorage.getItem('lang'); 
  
  // if it not current enabled, enable it
  if (lang !== 'fr') {
    switchFrench();
  // if it has been enabled, turn it off  
  } else {  
    switchEnglish(); 
  }
});
