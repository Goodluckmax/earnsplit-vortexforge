
// Mobile Responsive Menu for VortexForge Studios
document.addEventListener('DOMContentLoaded', function() {
  // Create hamburger if not exists
  const headers = document.querySelectorAll('.nav');
  headers.forEach(nav => {
    if (!nav.querySelector('.hamburger')) {
      const ham = document.createElement('button');
      ham.className = 'hamburger';
      ham.innerHTML = '☰';
      ham.onclick = toggleMobileMenu;
      nav.appendChild(ham);
    }
  });

  // Create mobile menu container if not exists
  if (!document.querySelector('.mobile-menu')) {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <a href="index.html">🏠 Home</a>
      <a href="dashboard.html">📊 Dashboard</a>
      <a href="pages/profile.html">👤 Profile</a>
      <a href="pages/support.html">💬 Customer Care - vortexforgestudiosllc@gmail.com</a>
      <a href="https://wa.me/2347057796517" target="_blank">📱 WhatsApp: +2347057796517</a>
      <a href="login.html">🔑 Login</a>
      <a href="signup.html">🚀 Sign Up</a>
      <a href="pages/about.html">ℹ️ How 70/30 Works</a>
      <a href="pages/terms.html">📄 Terms & Privacy</a>
    `;
    document.body.appendChild(mobileMenu);
  }

  // Fix paths for pages folder
  const isInPages = window.location.pathname.includes('/pages/');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (isInPages && href && !href.startsWith('http') && !href.startsWith('../')) {
      if (href.startsWith('pages/')) {
        link.setAttribute('href', href.replace('pages/', ''));
      } else if (href === 'index.html' || href === 'dashboard.html' || href === 'login.html' || href === 'signup.html') {
        link.setAttribute('href', '../' + href);
      }
    } else if (!isInPages && href && href.startsWith('../')) {
      link.setAttribute('href', href.replace('../', ''));
    }
  });
});

function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  if (menu) {
    menu.classList.toggle('active');
    const btn = document.querySelector('.hamburger');
    btn.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.querySelector('.mobile-menu');
  const ham = document.querySelector('.hamburger');
  if (menu && menu.classList.contains('active') && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('active');
    if (ham) ham.innerHTML = '☰';
  }
});

// Make offers grid responsive - add touch scroll
document.addEventListener('DOMContentLoaded', function() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.style.webkitOverflowScrolling = 'touch';
  });
});
