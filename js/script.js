document.addEventListener('DOMContentLoaded', function() {
    // Предотвращаем проблемы с загрузкой и применяем нужные стили
    document.body.style.opacity = '1';
    document.documentElement.style.opacity = '1';
    
    // Check if we're on the history page
    const isHistoryPage = document.body.getAttribute('data-page') === 'history';
    
    // Управление плавающей кнопкой службы спасения
    const floatingEmergency = document.querySelector('.floating-emergency');
    
    // Показываем кнопку только на главной странице (index.html или /)
    if (floatingEmergency) {
        const isHomePage = 
            location.pathname === '/' || 
            location.pathname === '/index.html' || 
            location.pathname.endsWith('/index.html') ||
            location.pathname === '';
        
        if (!isHomePage) {
            floatingEmergency.style.display = 'none';
        } else {
            // Сразу показываем кнопку в развернутом виде при загрузке страницы
            const label = floatingEmergency.querySelector('.label');
            floatingEmergency.classList.add('expanded');
            
            // Через 2 секунды сворачиваем кнопку до иконки и числа 112 с анимацией
            setTimeout(function() {
                // Применяем анимацию скрытия текста
                label.style.animation = 'collapseText 0.5s ease forwards';
                
                // По завершении анимации добавляем класс semi-collapsed
                setTimeout(() => {
                    floatingEmergency.classList.remove('expanded');
                    floatingEmergency.classList.add('semi-collapsed');
                }, 500);
            }, 2000);
        }
    }
    
    // Ensure hero sections are always visible without animations
    const heroElements = document.querySelectorAll('.hero, .hero h2, .hero p');
    heroElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.animation = 'none';
    });
    
    // Гарантируем, что header всегда виден при загрузке страницы
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
        
        // Устанавливаем стили для всех внутренних элементов header
        const headerElements = header.querySelectorAll('*');
        headerElements.forEach(el => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
        });
    }
    
    // Тема
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    
    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
    }
    
    // Переключение темы
    themeToggle.addEventListener('change', function() {
        // Add animation class to body
        document.body.classList.add('theme-transition');
        
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        
        // Remove animation class after transition completes
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 600); // Slightly longer than the CSS transition time
    });
    
    // Компактная шапка при прокрутке
    
    // Сразу проверим позицию скролла для корректной инициализации
    if (window.scrollY > 20) {
        header.classList.add('compact');
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header.classList.add('compact');
        } else {
            header.classList.remove('compact');
        }
    });
    
    // ========== МОБИЛЬНОЕ МЕНЮ - ЛОГИКА УДАЛЕНА ==========

    // ========== NAVIGATION HIDE ON SCROLL LOGIC ==========
    const mainNav = document.getElementById('main-navigation');
    let lastScrollTop = 0;
    const scrollThreshold = 50; // Pixels to scroll before triggering hide/show

    if (mainNav && window.innerWidth <= 768) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
                return; // Not enough scroll to trigger change
            }

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling Down and past initial area
                mainNav.classList.add('hide-on-scroll');
            } else {
                // Scrolling Up
                mainNav.classList.remove('hide-on-scroll');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        }, false);
    }

    // Update navigation visibility on window resize
    window.addEventListener('resize', function() {
        if (mainNav) {
            if (window.innerWidth <= 768) {
                // Mobile - enable scroll behavior if not already enabled
                mainNav.classList.remove('hide-on-scroll');
            } else {
                // Desktop - remove mobile classes
                mainNav.classList.remove('hide-on-scroll');
            }
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the data to a server
            // For now, we'll just show a success message
            alert(`Спасибо, ${name}! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация появления элементов при прокрутке
    const animateOnScroll = function() {
        // Skip animations on history page
        if (isHistoryPage) return;
        
        const elements = document.querySelectorAll('.info-section, .text-content, .image-container');
        
        elements.forEach(element => {
            // Проверяем, что элемент не находится внутри header
            if (!element.closest('header')) {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                // Если элемент виден в окне просмотра
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            }
        });
    };
    
    // Запускаем анимацию при загрузке и прокрутке страницы
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Плавный переход между страницами - не выполнять для текущей страницы
    const pageLinks = document.querySelectorAll('nav a:not([href^="#"])');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Только для внутренних ссылок
            if (this.hostname === window.location.hostname) {
                const currentPath = window.location.pathname;
                const href = this.getAttribute('href');
                
                // If it points to the current page, prevent default navigation
                if (currentPath.endsWith(href) || 
                    (currentPath.endsWith('/') && href === 'index.html') ||
                    (currentPath === '/' && href === 'index.html')) {
                    e.preventDefault();
                    return;
                }
                
                e.preventDefault();
                
                // Анимация исчезновения только содержимого страницы (main и footer), но не header и hero
                const mainContent = document.querySelector('main');
                const footerContent = document.querySelector('footer');
                
                if (mainContent) mainContent.style.opacity = '0';
                if (footerContent) footerContent.style.opacity = '0';
                
                // Убедимся, что header и hero остаются видимыми
                if (header) {
                    header.style.opacity = '1';
                    header.style.visibility = 'visible';
                }
                
                // Переход на новую страницу после завершения анимации
                setTimeout(function() {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });
});

// Функция копирования номера
function copyNumber(number) {
    navigator.clipboard.writeText(number)
        .then(() => {
            showTooltip();
        })
        .catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
}

// Показать всплывающее уведомление
function showTooltip() {
    const tooltip = document.getElementById('copy-tooltip');
    tooltip.classList.add('show');
    
    setTimeout(() => {
        tooltip.classList.remove('show');
    }, 2000);
} 