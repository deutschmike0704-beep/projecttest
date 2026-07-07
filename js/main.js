/**
 * Landing Page — Jahr, Formular, Smooth-Scroll-Hinweis
 */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const form = document.querySelector(".booking-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // Backend/Calendly/Stripe hier anbinden
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Anfrage wird gesendet…";
      window.setTimeout(() => {
        btn.textContent = "Danke! Wir melden uns innerhalb von 24 h.";
        form.reset();
        window.setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalText;
        }, 4000);
      }, 800);
    });
  }
});