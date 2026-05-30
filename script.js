const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const lightbox = document.querySelector(".lightbox");

// Mobile menu: the button opens/closes the repeated navigation on small screens.
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Lightbox: any element with .gallery-item or .film-tile opens a full-size preview.
// To add a lightbox photo, put an img inside the clickable item.
if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item, .film-tile").forEach((item) => {
    item.addEventListener("click", () => {
      const image = item.querySelector("img");
      // Removes the Squarespace ?format=1200w style suffix so the preview can use the original asset.
      lightboxImage.src = image.src.replace(/\?format=\d+w$/, "");
      lightboxImage.alt = image.alt;
      lightbox.hidden = false;
      closeButton.focus();
    });
  });

  // Shared close behavior for the close button, backdrop click, and Escape key.
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
  }

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
