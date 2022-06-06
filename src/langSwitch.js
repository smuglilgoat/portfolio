// Check for saved 'lang' in localStorage
let lang = localStorage.getItem("lang");

const langToggle = document.querySelector("#lang-toggle");

const switchFrench = () => {
  // Update lang in localStorage
  localStorage.setItem("lang", "fr");

  // Update the language toggle button
  langToggle.innerHTML = '<img src="src/us.webp" class="w-5 h-5" alt="USA Flag Icon">';
  langToggle.classList.remove("bg-blue-700", "hover:bg-blue-400");
  langToggle.classList.add("bg-white", "hover:bg-gray-200");

  // Change the language of the navbar links to french
  document.getElementById("works-link").innerHTML = "Projets";
  document.getElementById("contact-link").innerHTML = "Contacts";

  // Change the language of the title to french
  document.getElementById("job-title").innerHTML = "Développeur Full Stack";

  // Change the language of the about me section to french
  document.getElementById("about-me-title").innerHTML = "À propos de moi";
  document.getElementById("about-me-text").innerHTML = "Full-Stack Developer & Visual Computing Engineer, passionné par les technologies web et multimédia, toujours à la recherche de nouvelles choses à apprendre.";

  // Change the language of the works section to french
  document.getElementById("works-title").innerHTML = "Projets";

  // Change the language of the bio section to french
  document.getElementById("bio-title").innerHTML = "Bio";
  document.getElementById("bio-text").innerHTML = "<li><span class=\"font-extrabold\">1998</span> &emsp; Né à Amizour, Algérie</li><li><span class=\"font-extrabold\">2019</span> &emsp; Diplôme de Licence en Ingénierie Logicielle</li><li><span class=\"font-extrabold\">2021</span> &emsp; Diplôme de Master en Informatique Visuelle</li><li><span class=\"font-extrabold\">2022 à aujourd’hui</span> &emsp; Travails à Goubba</li>";

  // Change the language of the hobbies section to french
  document.getElementById("hobbies-title").innerHTML = "Passe-temps";

  // Change the language of the contacts section to french
  document.getElementById("contacts-title").innerHTML = "Contacts";
};

const switchEnglish = () => {
  // Update lang in localStorage
  localStorage.setItem("lang", "en");

  // Update the language toggle button
  langToggle.innerHTML = '<img src="src/fr.webp" class="w-5 h-5" alt="France Flag Icon">';
  langToggle.classList.remove("bg-white", "hover:bg-gray-200");
  langToggle.classList.add("bg-blue-700", "hover:bg-blue-400");

  // Change the language of the navbar links
  document.getElementById("works-link").innerHTML = "Works";
  document.getElementById("contact-link").innerHTML = "Contacts";

  // Change the language of the title to english
  document.getElementById("job-title").innerHTML = "Full-Stack Developper";

  // Change the language of the about me section to english
  document.getElementById("about-me-title").innerHTML = "About me";
  document.getElementById("about-me-text").innerHTML = "Full-Stack Developer & Visual Computing Engineer, passionate about web and multimedia technologies, always looking for new things to learn.";

  // Change the language of the works section to english
  document.getElementById("works-title").innerHTML = "Works";

  // Change the language of the bio section to english
  document.getElementById("bio-title").innerHTML = "Bio";
  document.getElementById("bio-text").innerHTML = "<li><span class=\"font-extrabold\">1998</span> &emsp; Born in Amizour, Algeria</li><li><span class=\"font-extrabold\">2019</span> &emsp; Completed a License Degree in Software Engineering</li><li><span class=\"font-extrabold\">2021</span> &emsp; Completed a Master's Degree in Visual Computing</li><li><span class=\"font-extrabold\">2022 to present</span> &emsp; Working at Goubba</li>";

  // Change the language of the hobbies section to english
  document.getElementById("hobbies-title").innerHTML = "Hobbies";

  // Change the language of the contacts section to english
  document.getElementById("contacts-title").innerHTML = "Contacts";
};

// If the user already visited and enabled darkMode
// start things off with it on
if (lang === "fr") {
  switchFrench();
}

// When someone clicks the button
langToggle.addEventListener("click", () => {
  // get their darkMode setting
  lang = localStorage.getItem("lang");

  // if it not current enabled, enable it
  if (lang !== "fr") {
    switchFrench();
    // if it has been enabled, turn it off
  } else {
    switchEnglish();
  }
});
