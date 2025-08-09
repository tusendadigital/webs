// Reviews data from reseñas.txt
const reviewsData = [
  {
    name: "Mario Álvarez",
    rating: 5,
    date: "Hace 1 año",
    text: "Un crack! Experiencia inmejorable y 100% recomendable."
  },
  {
    name: "A GBernardo",
    rating: 5,
    date: "Hace 7 años",
    text: "Mikelo es un gran profesional además de ser encantador. Vivimos fuera pero cuando volvemos a Avilés mi marido siempre quiere ir. Corta el pelo MUY bien."
  },
  {
    name: "L Gr",
    rating: 5,
    date: "Hace 1 año",
    text: "UFuimos al primer corte de pelo de nuestro hijo,1 año, se nota su experiencia, muy buen trato y trabajo impecable."
  },
  {
    name: "Miguel Ángel Fernandez Juan",
    rating: 5,
    date: "Hace 4 años",
    text: "Excelente el tocayo mío, como siempre gran trato y una persona que te hace sentirte agusto desde que entras hasta que sales de la peluquería y corta el pelo genial, para mí es el mejor."
  },
  {
    name: "Nano Margolles",
    rating: 5,
    date: "Hace 2 años",
    text: "Todo un crack tanto profesional como personalmente. Años y años contando con sus servicios. 100% recomendable"
  },
  {
    name: "Lore B",
    rating: 5,
    date: "Hace 2 años",
    text: "Muy buen profesional y mejor persona, una maravilla de trato a niños y mayores 👍👍"
  },
  {
    name: "Sergio",
    rating: 5,
    date: "Hace 6 años",
    text: "Gran profesional y un trato muy agradable, te sientes como casa, la recomiendo sin duda, para mi la mejor peluqueria y barberia de aviles"
  },
  {
    name: "LUIS TORRICO CASTRO",
    rating: 5,
    date: "Hace 2 años",
    text: "Cambié de residencia y encontré a Mikelo por internet. Gran persona y un gran profesional mi peluquero de confianza."
  },
  {
    name: "Javier B",
    rating: 5,
    date: "Hace un año",
    text: "Un gran profesional. Sin duda recomendable"
  },
  {
    name: "Eladio Herrero",
    rating: 5,
    date: "Hace 4 años",
    text: "Estupendo.el tio mola mucho y es un profesional.bien sitio pa salir guapo.calidad precio estupendo"
  },
  {
    name: "José Fernández Presa",
    rating: 5,
    date: "Hace 3 años",
    text: "El mejor peluquero de Avilés. Extremadamente profesional y agradable, a la par que divertido. Mikelo es un crack!"
  },
  {
    name: "Pablo Sastre",
    rating: 5,
    date: "Hace 8 años",
    text: "Gran peluquero, llevo ya muchísimos años a sus manos y siempre salgo encantado 10/10"
  },
  {
    name: "Francisco Javier Alvarez Tabares",
    rating: 5,
    date: "Hace 5 años",
    text: "Es una de las mejores peluquerías de la zona de avilés y alrededores...el trato excelente y y te vas satisfecho con el look que quieres....un 10"
  },
  {
    name: "Clouseau",
    rating: 5,
    date: "Hace 3 años",
    text: "Buen peluquero! Sitio muy limpio, acogedor y trato amable."
  },
  {
    name: "Miguel Olmedo",
    rating: 5,
    date: "Hace 7 años",
    text: "La mejor peluqueria sin lugar a dudas, donde sentirse como en casa. El trato es insuperable y los cortes de 10."
  },
  {
    name: "Ignacio Fernandez Suarez",
    rating: 5,
    date: "Hace 10 meses",
    text: "Mikelo crack! El mejor peluquero de Avilés…"
  },
  {
    name: "Francisco Díaz",
    rating: 5,
    date: "Hace 4 años",
    text: "Buen precio, muy buena atención, gran servicio. Recomendable."
  },
  {
    name: "Guillermo DA",
    rating: 5,
    date: "Hace 2 años",
    text: "Si necesitas cortarte el pelo es de largo el mejor de todo asturias"
  },
  {
    name: "JOSE LUIS GRELA RIVAS",
    rating: 5,
    date: "Hace 2 años",
    text: "Buen profesional. Buen trato personal."
  },
  {
    name: "Suso Ron",
    rating: 5,
    date: "Hace 7 años",
    text: "Es un amigo que te corta el pelo y te aconseja. Muy agradable."
  },
  {
    name: "Argovejo",
    rating: 5,
    date: "Hace 4 años",
    text: "Excelente profesional y mejor persona. Siempre salgo satisfecho con el resultado."
  }
];

// Create and populate continuous reviews carousel
function createContinuousReviews() {
  const reviewsTrack = document.getElementById('continuousReviewsTrack');
  
  if (!reviewsTrack) return;
  
  // Create reviews HTML - duplicate for seamless loop
  const reviewsHTML = [...reviewsData, ...reviewsData].map(review => `
    <div class="continuous-review-card">
      <div class="flex items-center mb-3">
        <i class="ri-google-fill google-logo"></i>
        <span class="text-gray-400 text-sm">Reseña de Google</span>
      </div>
      <div class="star-rating mb-3">
        ${'★'.repeat(review.rating)}
      </div>
      <div class="review-author">${review.name}</div>
      <div class="review-date">${review.date}</div>
      <p class="review-text">${review.text}</p>
    </div>
  `).join('');
  
  reviewsTrack.innerHTML = reviewsHTML;
}

// Loading Animation
window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loading').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 500);
  }, 1000);
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.className = 'ri-menu-line ri-lg';
      mobileMenuButton.style.transform = 'rotate(0deg)';
    } else {
      icon.className = 'ri-close-line ri-lg';
      mobileMenuButton.style.transform = 'rotate(180deg)';
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuButton.querySelector('i');
      icon.className = 'ri-menu-line ri-lg';
      mobileMenuButton.style.transform = 'rotate(0deg)';
    });
  });

  // Initialize continuous reviews
  createContinuousReviews();
});

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Scroll Animations
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
  }
});

// Review Slider
document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('reviewTrack');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const totalSlides = 4;

  function updateSlider() {
    const slideWidth = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  // Auto-play
  let slideInterval = setInterval(nextSlide, 4000);

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 4000);
    });
  });

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(slideInterval));
  track.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 4000);
  });

  // Initialize
  updateSlider();

  // Handle window resize
  window.addEventListener('resize', updateSlider);
});

// Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');

  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items with animation
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

  // Modal functionality
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h3').textContent;
      const description = item.querySelector('p').textContent;

      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Close modal on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
});

// Parallax Effect
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax-element');

  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Touch and Accessibility Improvements
document.addEventListener('DOMContentLoaded', function() {
  // Add touch feedback for mobile
  const touchElements = document.querySelectorAll('.service-card, .review-card, .gallery-item, .card-elevated');
  touchElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });
    element.addEventListener('touchend', function() {
      this.style.transform = '';
    });
  });

  // Improve keyboard navigation
  const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = '2px solid #D4AF37';
      this.style.outlineOffset = '2px';
    });
    element.addEventListener('blur', function() {
      this.style.outline = '';
      this.style.outlineOffset = '';
    });
  });
});

// Performance optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load images
  const images = document.querySelectorAll('img');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Trigger load
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScrollAnimations, 10);
  });
});
