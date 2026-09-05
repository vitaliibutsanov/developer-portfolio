document.addEventListener("DOMContentLoaded", () => {
  window.PortfolioI18n?.init();

  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
});
