if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

let lightBtn = document.getElementById("lightBtn");

lightBtn.addEventListener("click", () => {
    lightBtn.innerHTML == "🌞"
        ? (lightBtn.innerHTML = "🌚")
        : (lightBtn.innerHTML = "🌞");
    localStorage.theme == "light"
        ? (localStorage.theme = "dark")
        : (localStorage.theme = "light");
    if (lightBtn.classList.contains("bg-gray-900")) {
        lightBtn.classList.remove("bg-gray-900", "hover:bg-gray-600");
        lightBtn.classList.add("bg-orange-400", "hover:bg-orange-200");
    } else {
        lightBtn.classList.remove("bg-orange-400", "hover:bg-orange-200");
        lightBtn.classList.add("bg-gray-900", "hover:bg-gray-600");
    }
});
