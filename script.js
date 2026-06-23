const galleryItems = document.querySelectorAll('.gallery-item, .program-image-clickable');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

galleryItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const src = item.dataset.src;
    if (src) {
      lightboxImage.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightboxClose.click();
  }
});

// Close lightbox on Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    lightboxClose.click();
  }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (href.length > 1) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
