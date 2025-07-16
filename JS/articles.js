let soundOn = true;
const wave = document.getElementById('curseur');

document.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 40 + 10;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    sparkle.style.setProperty('--x', `${offsetX}px`);
    sparkle.style.setProperty('--y', `${offsetY}px`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
});

const menuBtn = document.getElementById('menuBtn');
document.addEventListener('mousemove', (e) => {
  const rect = menuBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  const distance = Math.hypot(dx, dy);

  if (distance < 150) {
    menuBtn.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
  } else {
    menuBtn.style.transform = 'translate(0, 0)';
  }
});

const menuOverlay = document.getElementById('menuOverlay');
const menuContent = document.getElementById('menuContent');

menuBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'flex';
});

menuOverlay.addEventListener('click', (e) => {
  if (!menuContent.contains(e.target)) {
    menuOverlay.style.display = 'none';
  }
});


const articlePopup = document.getElementById('articlePopup');
const popupContent = document.getElementById('popupContent');
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');
const article4 = document.getElementById('article4');
const article5 = document.getElementById('article5');
const article6 = document.getElementById('article6');

article1.addEventListener('click', () => {
  articlePopup.style.display = 'flex';
});
article2.addEventListener('click', () => {
  articlePopup.style.display = 'flex';
});
article3.addEventListener('click', () => {
  articlePopup.style.display = 'flex';
});
article4.addEventListener('click', () => {
  articlePopup.style.display = 'flex';
});
article5.addEventListener('click', () => {
  articlePopup.style.display = 'flex';
});
article6.addEventListener('click', () => {
  articlePopup.style.display = 'flex';
});

articlePopup.addEventListener('click', (e) => {
  if (!popupContent.contains(e.target)) {
    articlePopup.style.display = 'none';
  }
});

const articles = document.querySelectorAll('.article-item');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.9;

  articles.forEach(article => {
    const articleTop = article.getBoundingClientRect().top;

    if (articleTop < triggerBottom) {
      article.classList.add('visible');
    } else {
      article.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });