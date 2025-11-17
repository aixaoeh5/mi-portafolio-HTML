const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
let open = false;

const caseModal = document.getElementById("case-modal");
const closeModalBtn = document.getElementById("modal-close");
const downloadEsBtn = document.getElementById("download-es");
const downloadEnBtn = document.getElementById("download-en");

let activeCase = { es: null, en: null };

burger?.addEventListener("click", () => {
  open = !open;
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 860 && open) {
      open = false;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
});

document.querySelectorAll(".case-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    activeCase.es = link.dataset.pdfEs || "";
    activeCase.en = link.dataset.pdfEn || "";
    caseModal.classList.add("open");
    caseModal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  caseModal.classList.remove("open");
  caseModal.setAttribute("aria-hidden", "true");
}

closeModalBtn.addEventListener("click", closeModal);

caseModal.addEventListener("click", (e) => {
  if (e.target === caseModal) {
    closeModal();
  }
});

downloadEsBtn.addEventListener("click", () => {
  if (activeCase.es) {
    window.open(activeCase.es, "_blank");
  } else {
    alert(
      "Configura la ruta del PDF en español en el atributo data-pdf-es de este proyecto."
    );
  }
});

downloadEnBtn.addEventListener("click", () => {
  if (activeCase.en) {
    window.open(activeCase.en, "_blank");
  } else {
    alert(
      "Configura la ruta del PDF en inglés en el atributo data-pdf-en de este proyecto."
    );
  }
});
