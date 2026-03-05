// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/


// Portfolio data for carousel

        const portfolioData = [
            {
                id: 1,
                title: 'Neural Network',
                description: 'Advanced AI system with deep learning capabilities for predictive analytics and pattern recognition.',
                image: 'images/neural-network.jpg',
                tech: ['TensorFlow', 'Python', 'CUDA']
            },
            {
                id: 2,
                title: 'Quantum Cloud',
                description: 'Next-generation cloud infrastructure leveraging quantum computing for unprecedented processing power.',
                image: 'images/quantum-cloud.jpg',
                tech: ['AWS', 'Kubernetes', 'Docker']
            },
            {
                id: 3,
                title: 'Blockchain Vault',
                description: 'Secure decentralized storage solution using advanced encryption and distributed ledger technology.',
                image: 'images/blockchain-vault.jpg',
                tech: ['Ethereum', 'Solidity', 'Web3']
            },
            {
                id: 4,
                title: 'Cyber Defense',
                description: 'Military-grade cybersecurity framework with real-time threat detection and automated response.',
                image: 'images/cyber-defense.jpg',
                tech: ['Zero Trust', 'AI Defense', 'Encryption']
            },
            {
                id: 5,
                title: 'Data Nexus',
                description: 'Big data processing platform capable of analyzing petabytes of information in real-time.',
                image: 'images/data-nexus.jpg',
                tech: ['Apache Spark', 'Hadoop', 'Kafka']
            },
            {
                id: 6,
                title: 'AR Interface',
                description: 'Augmented reality system for immersive data visualization and interactive experiences.',
                image: 'images/ar-interface.jpg',
                tech: ['Unity', 'ARCore', 'Computer Vision']
            },
            {
                id: 7,
                title: 'IoT Matrix',
                description: 'Intelligent IoT ecosystem connecting millions of devices with edge computing capabilities.',
                image: 'images/iot-matrix.jpg',
                tech: ['MQTT', 'Edge AI', '5G']
            }
        ];

        // Gallery data
                const galleryData = [
                    { title: 'Orbital Bay', caption: 'Atraque nocturno bajo lluvia de partículas.', image: 'images/neural-network.jpg' },
                    { title: 'Hangar Drone', caption: 'Ensambles mecha y carga automatizada.', image: 'images/ar-interface.jpg' },
                    { title: 'Command Deck', caption: 'HUD táctico con rutas y facciones.', image: 'images/quantum-cloud.jpg' },
                    { title: 'Cargo Ring', caption: 'Convoys entrando a la esclusa magnética.', image: 'images/blockchain-vault.jpg' },
                    { title: 'Market Row', caption: 'Señalética holográfica en mercado orbital.', image: 'images/data-nexus.jpg' },
                    { title: 'Storm Window', caption: 'Tormenta solar sobre el hemisferio oscuro.', image: 'images/iot-matrix.jpg' },
                    { title: 'Stellar Forge', caption: 'Armería flotante bañada en plasma.', image: 'images/cyber-defense.jpg' },
                    { title: 'Atrium Bloom', caption: 'Jardín hidropónico bajo domo ámbar.', image: 'images/neural-network.jpg' },
                    { title: 'Comms Array', caption: 'Antenas apuntando al cinturón exterior.', image: 'images/ar-interface.jpg' },
                    { title: 'Long Haul', caption: 'Carguero alineando salto gravitacional.', image: 'images/quantum-cloud.jpg' }
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
        const indicatorsContainer = document.getElementById('indicators');

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
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
                </div>
            `;
            
            return item;
        }

        function initCarousel() {
            // Create carousel items
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
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
                    spacing1 = 280;  // Was 400, now 100px closer
                    spacing2 = 420;  // Was 600, now 180px closer
                    spacing3 = 550;  // Was 750, now 200px closer
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    // Center item
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    // Side items
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    // Further side items
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    // Even further items
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    // Hidden items (behind)
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
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

        // Initialize gallery grid
        function initGalleryGrid() {
            const galleryGrid = document.getElementById('galleryGrid');
            const modal = document.getElementById('galleryModal');
            const modalImage = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');
            const modalClose = document.getElementById('modalClose');

            function openModal(item) {
                modal.classList.add('open');
                modalImage.src = item.image;
                modalImage.alt = item.title;
                modalCaption.textContent = item.caption || item.title;
            }

            function closeModal() {
                modal.classList.remove('open');
            }

            modalClose.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // Allow Esc to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('open')) {
                    closeModal();
                }
            });

            galleryGrid.innerHTML = '';

            galleryData.forEach((item, index) => {
                const hexagon = document.createElement('div');
                hexagon.className = 'skill-hexagon';
                hexagon.style.animationDelay = `${index * 0.08}s`;

                hexagon.innerHTML = `
                    <div class="hexagon-inner">
                        <img class="hexagon-media" src="${item.image}" alt="${item.title}">
                        <div class="hexagon-overlay">${item.title}</div>
                    </div>
                `;

                hexagon.addEventListener('click', () => openModal(item));
                galleryGrid.appendChild(hexagon);
            });
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
        initCarousel();
        initGalleryGrid();
        initParticles();

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
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
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
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

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        // Parallax disabled to keep carousel fixed in its section