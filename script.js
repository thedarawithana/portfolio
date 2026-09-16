/**
 * Personal Portfolio - Thedara Thisathmi Withana
 * Interactive UI Scripts: Theme, Filtering, Modals, Smooth Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Footer Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }

  // 3. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav item
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // 4. Scroll Active Navigation Link Highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });

    // 5. Back To Top Button Visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Back to top click handler
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Project Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. Project Details Modal Content & Interactions
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  const projectInfoBtns = document.querySelectorAll('.project-info-btn');

  const projectDetails = {
    'modal-predictor': {
      title: 'Study Performance Predictor',
      badge: 'Python & Machine Learning',
      summary: 'A predictive analytics and machine learning solution aimed at evaluating multiple academic indicators (study hours, attendance, assignments, and test history) to forecast examination performance.',
      features: [
        'Data cleaning, feature scaling, and correlation matrix analysis using Pandas and NumPy.',
        'Trained multiple regression and classification algorithms with Scikit-Learn to determine optimal prediction accuracy.',
        'Visualized risk factors and insights to assist students in proactively improving their study routines.'
      ],
      githubUrl: 'https://github.com/thedarawithana'
    },
    'modal-hotel': {
      title: 'Hotel Room Reservation System',
      badge: 'University Group Project (5 Members) | Java & SQL',
      summary: 'A complete desktop/database software solution developed collaboratively as a 5-member university project at SLIIT, implementing Object-Oriented design patterns for hotel front-desk and administrative management.',
      features: [
        'Developed as a 5-member collaborative university team at SLIIT using Git version control and agile coordination.',
        'Robust OOP architecture leveraging encapsulation, polymorphism, and inheritance.',
        'Real-time room availability lookup, guest check-in/check-out processing, and dynamic billing generation.',
        'Relational database integration (SQL) for persistent data storage and secure transaction logging.'
      ],
      githubUrl: 'https://github.com/thedarawithana'
    },
    'modal-eduframe': {
      title: 'EduFrame / Course Management System',
      badge: 'University Group Project (5 Members) | Java & Web',
      summary: 'An academic course management and learning portal engineered collaboratively by a team of 5 students at SLIIT, facilitating structured lesson content, grading, and administrative management.',
      features: [
        'Engineered collaboratively with a 5-member university development team at SLIIT.',
        'Role-based access management for students, instructors, and system administrators.',
        'Module and lesson tracking with student progress indicators.',
        'Modular architecture prepared for database persistence and full-stack deployment.'
      ],
      githubUrl: 'https://github.com/thedarawithana'
    },
    'modal-web': {
      title: 'Interactive Web-Based Projects',
      badge: 'HTML5, CSS3, JavaScript',
      summary: 'A suite of clean, responsive web applications designed to showcase user interface engineering, accessibility, and modern responsive layouts.',
      features: [
        'Fully responsive, mobile-first design with smooth CSS micro-interactions.',
        'Accessible, semantic HTML5 structure with optimized performance.',
        'Vanilla JavaScript interactivity without external heavyweight dependencies.'
      ],
      githubUrl: 'https://github.com/thedarawithana'
    }
  };

  projectInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      const details = projectDetails[modalKey];

      if (details && modalBody && projectModal) {
        modalBody.innerHTML = `
          <div class="modal-project-header">
            <span class="project-badge ai-badge">${details.badge}</span>
          </div>
          <h3 class="modal-project-title">${details.title}</h3>
          <p class="modal-project-summary">${details.summary}</p>
          <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem; color: var(--text-primary);">Key Highlights & Features:</h4>
          <ul class="modal-feature-list">
            ${details.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="modal-actions">
            <a href="${details.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fa-brands fa-github"></i> View on GitHub
            </a>
          </div>
        `;

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  const closeModal = () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Construct mailto link
      const encodedSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`);
      const encodedBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:thedarawithana2005@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      if (formStatus) {
        formStatus.textContent = 'Opening your email client to send message...';
        formStatus.classList.add('success');
      }
    });
  }
});
