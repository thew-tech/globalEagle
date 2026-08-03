document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll Effect ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // --- Scroll Animation Observer ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));

  // --- Hero Slider Logic ---
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    
    // Change slide every 5 seconds
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // --- Product Inquiry Modal Logic ---
  const productCards = document.querySelectorAll('.product-card');
  if (productCards.length > 0) {
    // 1. Inject modal markup if not already present
    if (!document.getElementById('inquiry-modal')) {
      const modalHTML = `
      <div class="modal-overlay" id="inquiry-modal">
        <div class="modal-container">
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Close modal">&times;</button>
          
          <div id="modal-form-content">
            <h3 class="modal-title">Request Quote / Inquire</h3>
            
            <div class="modal-product-preview">
              <img src="" alt="" class="modal-product-img" id="modal-product-img">
              <div class="modal-product-details">
                <h4 id="modal-product-name">Product Name</h4>
                <p id="modal-product-price">$0.00</p>
              </div>
            </div>
            
            <form class="modal-form" id="modal-inquiry-form">
              <div class="modal-form-grid">
                <div class="form-group">
                  <label for="inquiry-quantity">Quantity *</label>
                  <input type="number" id="inquiry-quantity" class="form-control" min="1" value="50" required>
                </div>
                <div class="form-group">
                  <label for="inquiry-email">Email Address *</label>
                  <input type="email" id="inquiry-email" class="form-control" placeholder="you@example.com" required>
                </div>
              </div>
              
              <div class="modal-form-grid">
                <div class="form-group">
                  <label for="inquiry-name">Contact Person *</label>
                  <input type="text" id="inquiry-name" class="form-control" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <label for="inquiry-phone">Contact Number *</label>
                  <input type="tel" id="inquiry-phone" class="form-control" placeholder="Phone Details" required>
                </div>
              </div>
              
              <div class="form-group">
                <label for="inquiry-address">Delivery Address *</label>
                <textarea id="inquiry-address" class="form-control" placeholder="Street Address, City, State, ZIP" required></textarea>
              </div>
              
              <div class="form-group">
                <label for="inquiry-message">Send a Message</label>
                <textarea id="inquiry-message" class="form-control" placeholder="Details about sizing, customization, or extra requests..."></textarea>
              </div>
              
              <button type="submit" class="modal-submit-btn">Send Inquiry</button>
            </form>
          </div>
          
          <div class="modal-success-screen" id="modal-success-screen">
            <div class="modal-success-icon">
              <i class="fas fa-check"></i>
            </div>
            <h3>Inquiry Prepared!</h3>
            <p>Your inquiry details have been packaged. We are opening your email application to send the message to <strong>info@globaleagleconsulting.com</strong>. Please review and hit send!</p>
            <button type="button" class="btn btn-solid" id="modal-success-close-btn" style="width: 200px; margin-top: 10px;">Done</button>
          </div>
        </div>
      </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Modal elements
    const modal = document.getElementById('inquiry-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const successCloseBtn = document.getElementById('modal-success-close-btn');
    const formContent = document.getElementById('modal-form-content');
    const successScreen = document.getElementById('modal-success-screen');
    const form = document.getElementById('modal-inquiry-form');
    
    const mImg = document.getElementById('modal-product-img');
    const mName = document.getElementById('modal-product-name');
    const mPrice = document.getElementById('modal-product-price');

    // Function to close modal
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      // Reset form and screen states
      form.reset();
      formContent.style.display = 'block';
      successScreen.style.display = 'none';
    };

    // Close on buttons click
    closeBtn.addEventListener('click', closeModal);
    successCloseBtn.addEventListener('click', closeModal);

    // Close on clicking outside container
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Handle ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Attach click listeners to product cards
    productCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Prevent click if clicking on inner link/button or static badges that are buttons themselves (if any)
        if (e.target.tagName === 'A' || (e.target.classList.contains('btn') && !e.target.classList.contains('btn-primary'))) {
          return;
        }

        // Get details from card
        const imgEl = card.querySelector('.product-img-wrap img') || card.querySelector('.product-img');
        const nameEl = card.querySelector('.product-name') || card.querySelector('.product-title');
        const priceEl = card.querySelector('.product-price');

        const imgSrc = imgEl ? imgEl.getAttribute('src') : '';
        const productName = nameEl ? nameEl.textContent.trim() : 'Product';
        const productPrice = priceEl ? priceEl.textContent.trim() : '';

        // Prefill modal details
        mImg.src = imgSrc;
        mImg.alt = productName;
        mName.textContent = productName;
        mPrice.textContent = productPrice;

        // Prefill dynamic custom message
        const messageTextarea = document.getElementById('inquiry-message');
        if (messageTextarea) {
          messageTextarea.value = `Hello, I'd like to get a quote and inquire about custom branding for the "${productName}" (${productPrice}). Please let me know the process and bulk delivery timeline.`;
        }

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
    });

    // Handle Form Submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const qty = document.getElementById('inquiry-quantity').value;
      const email = document.getElementById('inquiry-email').value;
      const name = document.getElementById('inquiry-name').value;
      const phone = document.getElementById('inquiry-phone').value;
      const address = document.getElementById('inquiry-address').value;
      const userMessage = document.getElementById('inquiry-message').value;
      const prodName = mName.textContent;
      const prodPrice = mPrice.textContent;

      // Construct mailto link
      const emailRecipient = 'info@globaleagleconsulting.com';
      const subject = `Product Inquiry: ${prodName} - Global Eagle Consulting`;
      const body = `PRODUCT DETAILS\n-------------------\nProduct: ${prodName}\nPrice per Unit: ${prodPrice}\nQuantity Requested: ${qty}\n\nINQUIRER CONTACT DETAILS\n-------------------\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nDELIVERY ADDRESS\n-------------------\n${address}\n\nCLIENT MESSAGE\n-------------------\n${userMessage}\n\n---\nSent via Global Eagle Consulting Product Inquiry Form.`;

      const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Switch to success state
      formContent.style.display = 'none';
      successScreen.style.display = 'flex';

      // Open user's email client
      window.location.href = mailtoUrl;
    });
  }

});
