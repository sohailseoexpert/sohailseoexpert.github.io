/* ===== EDIT YOUR DETAILS HERE ===== */
const CONFIG = {
  email: "EMAIL@YOURDOMAIN.COM",          // your real email
  whatsapp: "920000000000",               // country code + number, no + or spaces
  social: {
    linkedin: "https://www.linkedin.com/in/your-profile",
    facebook: "https://www.facebook.com/your-page",
    instagram: "https://www.instagram.com/your-handle",
    youtube: "https://www.youtube.com/@your-channel",
    pinterest: "https://www.pinterest.com/your-profile",
    github: "https://github.com/your-username"
  }
};
/* ================================== */
document.querySelectorAll("[data-mail]").forEach(a => { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; });
document.querySelectorAll("[data-wa]").forEach(a => a.href = "https://wa.me/" + CONFIG.whatsapp);
document.querySelectorAll("[data-social]").forEach(a => { const u = CONFIG.social[a.dataset.social]; if (u) a.href = u; });
document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, note = document.getElementById("form-note");
  if (!f.name.value.trim() || !f.email.validity.valid || !f.message.value.trim()) {
    note.textContent = "Please add your name, a valid email and a message."; return;
  }
  const body = `Name: ${f.name.value}\nEmail: ${f.email.value}\nWebsite: ${f.site.value || "-"}\nService: ${f.service.value}\n\n${f.message.value}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("SEO enquiry from " + f.name.value)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Your email app should open now. If it doesn't, email me directly.";
});
