// Reusable Components using Vanilla JS

const headerTemplate = `
<header id="main-header">
  <a href="./" class="logo">
    <img src="images/logo.png" alt="Global Eagle Consulting Logo" style="height: 230px; width: auto; display: block; margin: -79px 0;">
  </a>
  <div class="mobile-menu-btn" id="mobile-menu-btn">
    <i class="fas fa-bars"></i>
  </div>
  <nav>
    <ul class="nav-links" id="nav-links">
      <li><a href="./" class="nav-item" data-page="index">Home</a></li>
      <li class="nav-item-dropdown">
        <a href="services" class="nav-item" data-page="services">Our Services</a>
        <ul class="dropdown-menu">
          <li><a href="eagle-screen-printing">Screen Printing &amp; Branding</a></li>
          <li><a href="eagle-apparel">Apparel Mfg.</a></li>
          <li><a href="eagle-auctions">Auctions</a></li>
          <li><a href="eagle-cleaning">Cleaning</a></li>
          <li><a href="eagle-document">Documents</a></li>
          <li><a href="eagle-courier">Courier</a></li>
        </ul>
      </li>
      <li class="nav-item-dropdown">
        <a href="products" class="nav-item" data-page="products">Our Products</a>
        <ul class="dropdown-menu">
          <li><a href="consultation">Consultation</a></li>
          <li><a href="products">Branded Products</a></li>
        </ul>
      </li>
      <li><a href="about" class="nav-item" data-page="about">About Us</a></li>
      <li><a href="contact" class="nav-item" data-page="contact">Contact Us</a></li>
      <li><a href="review" class="nav-item" data-page="review">Review</a></li>
    </ul>
  </nav>
</header>
`;

const footerTemplate = `
<footer>
  <div class="footer-content">
    <div class="footer-col">
      <a href="./" class="logo" style="margin-bottom: 20px; display: inline-block;">
        <img src="images/logo.png" alt="Global Eagle Consulting Logo" style="height: 95px; width: auto; display: block;">
      </a>
      <p style="color: var(--text-muted);">Transforming your business with modern, professional, and reliable services. Your success is our mission.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="./">Home</a></li>
        <li><a href="services">Our Services</a></li>
        <li><a href="consultation">Consultation</a></li>
        <li><a href="products">Branded Products</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="about">About Us</a></li>
        <li><a href="contact">Contact Us</a></li>
        <li><a href="review">Reviews</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Info</h4>
      <ul class="footer-links">
        <li><i class="fas fa-phone" style="color: var(--accent); width: 20px;"></i> 626-749-3499</li>
        <li><i class="fas fa-envelope" style="color: var(--accent); width: 20px;"></i> info@globaleagleconsulting.com</li>
        <li><i class="fas fa-location-dot" style="color: var(--accent); width: 20px;"></i> 1408 S Garfield Ave #302, Alhambra, CA 91801</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Global Eagle Consulting. All Rights Reserved.</p>
    <p style="margin-top: 10px;"><a href="terms">Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="privacy">Privacy Policy</a></p>
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
  const currentPage = (window.location.pathname.split('/').pop() || 'index').replace(/\.html$/, '');
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
