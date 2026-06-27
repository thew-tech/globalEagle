// Reusable Components using Vanilla JS

const headerTemplate = `
<header id="main-header">
  <a href="index.html" class="logo">
    <img src="images/global_eagle_logo_cropped.jpg" alt="Global Eagle Consulting Logo" style="height: 55px; border-radius: 4px;"> 
  </a>
  <div class="mobile-menu-btn" id="mobile-menu-btn">
    <i class="fas fa-bars"></i>
  </div>
  <nav>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" class="nav-item" data-page="index.html">Home</a></li>
      <li><a href="services.html" class="nav-item" data-page="services.html">Our Services</a></li>

      <li><a href="about.html" class="nav-item" data-page="about.html">About Us</a></li>
      <li><a href="contact.html" class="nav-item" data-page="contact.html">Contact Us</a></li>
      <li><a href="review.html" class="nav-item" data-page="review.html">Review</a></li>
    </ul>
  </nav>
</header>
`;

const footerTemplate = `
<footer>
  <div class="footer-content">
    <div class="footer-col">
      <a href="index.html" class="logo" style="margin-bottom: 20px; display: inline-block;">
        <img src="images/global_eagle_logo_cropped.jpg" alt="Global Eagle Consulting Logo" style="height: 70px; border-radius: 4px;">
      </a>
      <p style="color: var(--text-muted);">Transforming your business with modern, professional, and reliable services. Your success is our mission.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Our Services</a></li>

      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="review.html">Reviews</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Info</h4>
      <ul class="footer-links">
        <li><i class="fas fa-map-marker-alt" style="color: var(--accent); width: 20px;"></i> 123 Eagle Way, Business Dist.</li>
        <li><i class="fas fa-phone" style="color: var(--accent); width: 20px;"></i> +1 (555) 123-4567</li>
        <li><i class="fas fa-envelope" style="color: var(--accent); width: 20px;"></i> info@globaleagleconsulting.com</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Global Eagle Consulting. All Rights Reserved.</p>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject Header
  const headerPlaceholder = document.getElementById('app-header');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;
  }

  // Inject Footer
  const footerPlaceholder = document.getElementById('app-footer');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerTemplate;
  }

  // Set Active Nav Link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === currentPage) {
      item.classList.add('active');
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'var(--bg-color)';
      navLinks.style.padding = '20px';
    });
  }
});
