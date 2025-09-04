function createLangToggle() {
  const section = document.createElement("section");
  section.innerHTML = `
    <section class="lang-toggle" style="display: flex">
      <button
        style="margin-left: auto"
        id="langButton"
        onclick="toggleLanguage()"
      >
        English
      </button>
    </section>
  `;
  document.body.appendChild(section);
}

createLangToggle();
