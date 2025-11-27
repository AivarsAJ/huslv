// JavaScript Document

/*
HUS.LV ECO HOUSES
Adapted from TemplateMo 600 Prism Flux
*/

// Portfolio data for carousel - House Projects
const portfolioData = [
    {
        id: 1,
        title: 'DZĪVOJAMĀ MĀJA 1',
        description: 'Ekoloģiskas un enerģiju taupošas koka karkasa paneļu mājas ar izcilu kvalitāti un komfortu.',
        image: 'MAJAS/phoca_thumb_l_Ikskile-F02.jpg',
        tech: ['Koka Karkass', 'Enerģiju Taupošs', 'Ekoloģisks']
    },
    {
        id: 2,
        title: 'DZĪVOJAMĀ MĀJA 2',
        description: 'Profesionālas jumta kopņu ražošana un montāža ar augstākās klases materiāliem.',
        image: 'MAJAS/phoca_thumb_l_Ikskile-F03.jpg',
        tech: ['Profesionāla', 'Kvalitatīva', 'Uzticama']
    },
    {
        id: 3,
        title: 'DZĪVOJAMĀ MĀJA 3',
        description: 'Rūpnīciski krāsoti fasādes dēļi ar ilgmūžīgu aizsardzību pret laikapstākļiem.',
        image: 'MAJAS/phoca_thumb_l_Ikskile-F07.jpg',
        tech: ['Rūpnīciska Krāsa', 'Ilgmūžīga', 'Stilīga']
    },
    {
        id: 4,
        title: 'DZĪVOJAMĀ MĀJA 4',
        description: 'Tipveida vai individuāla projekta izvēle un piesaiste zemesgabalam ar pilnu atbalstu.',
        image: 'MAJAS/phoca_thumb_l_Ikskile-F10.jpg',
        tech: ['Individuāla', 'Profesionāla', 'Detalizēta']
    },
    {
        id: 5,
        title: 'DZĪVOJAMĀ MĀJA 5',
        description: 'Ēkas pamatu un inženiertīklu izbūve ar pieredzējušiem speciālistiem.',
        image: 'MAJAS/phoca_thumb_l_Ikskile-F11.jpg',
        tech: ['Stabila', 'Profesionāla', 'Uzticama']
    },
    {
        id: 6,
        title: 'DZĪVOJAMĀ MĀJA 6',
        description: 'Ūdensapgāde, apkure, ventilācija - pilns inženiertīklu komplekts jūsu mājai.',
        image: 'MAJAS/phoca_thumb_l_zv14_exter1.jpg',
        tech: ['Mūsdienīga', 'Efektīva', 'Ekoloģiska']
    },
    {
        id: 7,
        title: 'DZĪVOJAMĀ MĀJA 7',
        description: 'Ģipškartona montāža, špaktelēšana, krāsošana un citi iekštelpu apdares darbi.',
        image: 'MAJAS/phoca_thumb_l_zv14_exter4.jpg',
        tech: ['Kvalitatīva', 'Moderni', 'Stilīgi']
    }
];

// Services data for skills section
const skillsData = [
    { name: 'Projektēšana', icon: '📐', level: 100, category: 'design' },
    { name: 'Koka Karkass', icon: '🏠', level: 100, category: 'production' },
    { name: 'Jumta Kopnes', icon: '🔨', level: 100, category: 'production' },
    { name: 'Pamati', icon: '🏗️', level: 100, category: 'construction' },
    { name: 'Montāža', icon: '⚙️', level: 100, category: 'construction' },
    { name: 'Fasādes', icon: '🎨', level: 100, category: 'production' },
    { name: 'Komunikācijas', icon: '🔌', level: 100, category: 'construction' },
    { name: 'Iekšdarbi', icon: '🛠️', level: 100, category: 'construction' },
    { name: 'Ekoloģija', icon: '🌱', level: 100, category: 'design' },
    { name: 'Kvalitāte', icon: '⭐', level: 100, category: 'all' },
    { name: 'Garantija', icon: '✅', level: 100, category: 'all' },
    { name: 'Pieredze', icon: '📊', level: 100, category: 'all' }
];

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize particles for philosophy section
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Start particles at random vertical positions throughout the section
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay for natural movement
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        // Random animation duration for variety
        particle.style.animationDuration = (18 + Math.random() * 8) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize carousel
let currentIndex = 0;
const carousel = document.getElementById('carousel');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;
    
    const techBadges = data.tech.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}" onerror="this.src='https://via.placeholder.com/400x200/6b9f78/ffffff?text=${encodeURIComponent(data.title)}'">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            <button class="card-cta" onclick="scrollToSection('about')">Uzzināt Vairāk</button>
        </div>
    `;
    
    return item;
}

function initCarousel() {
    // Create carousel items
    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);
    });
    
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;
    
    items.forEach((item, index) => {
        // Calculate relative position
        let offset = index - currentIndex;
        
        // Wrap around for continuous rotation
        if (offset > totalItems / 2) {
            offset -= totalItems;
        } else if (offset < -totalItems / 2) {
            offset += totalItems;
        }
        
        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;
        
        // Reset transform
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
        
        // Adjust spacing based on screen size
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;
        
        if (isMobile) {
            spacing1 = 280;
            spacing2 = 420;
            spacing3 = 550;
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }
        
        if (absOffset === 0) {
            // Center item
            item.style.transform = 'translate(-50%, calc(-50% - 100px)) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            // Side items
            const translateX = sign * spacing1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, calc(-50% - 100px)) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else if (absOffset === 2) {
            // Further side items
            const translateX = sign * spacing2;
            const rotation = isMobile ? 35 : 40;
            const scale = isMobile ? 0.75 : 0.7;
            item.style.transform = `translate(-50%, calc(-50% - 100px)) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';
        } else if (absOffset === 3) {
            // Even further items
            const translateX = sign * spacing3;
            const rotation = isMobile ? 40 : 45;
            const scale = isMobile ? 0.65 : 0.6;
            item.style.transform = `translate(-50%, calc(-50% - 100px)) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';
        } else {
            // Hidden items (behind)
            item.style.transform = 'translate(-50%, calc(-50% - 100px)) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Initialize hexagonal skills grid
function initSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    function displaySkills(category = 'all') {
        skillsGrid.innerHTML = '';
        
        const filteredSkills = category === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === category);
        
        filteredSkills.forEach((skill, index) => {
            const hexagon = document.createElement('div');
            hexagon.className = 'skill-hexagon';
            hexagon.style.animationDelay = `${index * 0.1}s`;
            
            hexagon.innerHTML = `
                <div class="hexagon-inner">
                    <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon}</div>
                        <div class="skill-name-hex">${skill.name}</div>
                        <div class="skill-level">
                            <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                        </div>
                        <div class="skill-percentage-hex">${skill.level}%</div>
                    </div>
                </div>
            `;
            
            skillsGrid.appendChild(hexagon);
        });
    }
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displaySkills(tab.dataset.category);
        });
    });
    
    displaySkills();
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Auto-rotate carousel
setInterval(nextSlide, 5000);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Update carousel on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateCarousel();
    }, 250);
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initSkillsGrid();
    initParticles();
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling and active navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu) navMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });
});

// Update active navigation on scroll
function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                if (!number.classList.contains('animated')) {
                    number.classList.add('animated');
                    animateCounter(number);
                }
            });
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert(`Paldies ${data.name}! Jūsu ziņojums ir nosūtīts veiksmīgi. Mēs atbildēsim 24 stundu laikā.`);
        
        // Reset form
        contactForm.reset();
    });
}

// CTA Form submission
const contactFormCTA = document.getElementById('contactFormCTA');
if (contactFormCTA) {
    contactFormCTA.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactFormCTA);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert(`Paldies ${data.name}! Jūsu ziņojums ir nosūtīts veiksmīgi. Mēs atbildēsim 24 stundu laikā.`);
        
        // Reset form
        contactFormCTA.reset();
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

