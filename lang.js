// Detectar idioma inicial: localStorage o default "es"
let currentLang = localStorage.getItem("lang") || "es";

// Actualiza el texto del botón según el idioma actual
function updateLanguageButton(lang) {
  const langButton = document.getElementById("langButton");
  langButton.innerText = lang === "es" ? "English" : "Castellano";
}

// Función para cargar traducciones desde JSON
async function setLanguage(lang) {
  try {
    const response = await fetch(`/lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[key]) {
        el.innerHTML = translations[key];
      }
    });

    localStorage.setItem("lang", lang);
    currentLang = lang;

    // Actualiza el botón
    updateLanguageButton(lang);
  } catch (error) {
    console.error("Error cargando traducciones:", error);
  }
}

function toggleLanguage() {
  const newLang = currentLang === "es" ? "en" : "es";
  setLanguage(newLang);
}

window.onload = () => {
  setLanguage(currentLang);
};
