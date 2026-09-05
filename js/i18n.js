(function () {
  const DEFAULT_LANGUAGE = "en";
  const STORAGE_KEY = "portfolio-language";
  const SUPPORTED_LANGUAGES = ["en", "pl", "ru", "uk"];

  function getNestedValue(object, path) {
    return path.split(".").reduce((value, key) => value?.[key], object);
  }

  function getTranslation(language, key) {
    const translations = window.TRANSLATIONS || {};
    return getNestedValue(translations[language], key)
      ?? getNestedValue(translations[DEFAULT_LANGUAGE], key)
      ?? key;
  }

  function setLanguage(language) {
    const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    document.documentElement.lang = nextLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = getTranslation(nextLanguage, element.dataset.i18n);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === nextLanguage));
    });

    localStorage.setItem(STORAGE_KEY, nextLanguage);
  }

  function initI18n() {
    setLanguage(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE);
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.language));
    });
  }

  window.PortfolioI18n = { init: initI18n, setLanguage };
})();
