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
    
    // ========== МОБИЛЬНОЕ МЕНЮ - ИСПРАВЛЕННАЯ ЛОГИКА С ОРИГИНАЛЬНЫМИ КЛАССАМИ ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    let savedScrollPosition = 0;
    
    if (menuToggle && nav) {
        // Основная функция переключения меню
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const isMenuOpen = nav.classList.contains('show');
            
            if (isMenuOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Функция открытия меню
        function openMobileMenu() {
            // Сохраняем позицию скролла
            savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            
            // Блокируем скролл страницы
            document.body.classList.add('no-scroll');
            document.body.style.top = `-${savedScrollPosition}px`;
            
            // Показываем меню
            nav.classList.add('show');
            
            // Обновляем ARIA и анимацию кнопки
            menuToggle.setAttribute('aria-expanded', 'true');
            
            console.log('Мобильное меню открыто');
        }
        
        // Функция закрытия меню
        function closeMobileMenu() {
            // Скрываем меню
            nav.classList.remove('show');
            
            // Восстанавливаем скролл
            document.body.classList.remove('no-scroll');
            document.body.style.top = '';
            
            // Возвращаем позицию скролла
            if (savedScrollPosition > 0) {
                window.scrollTo(0, savedScrollPosition);
                savedScrollPosition = 0;
            }
            
            // Обновляем ARIA и анимацию кнопки
            menuToggle.setAttribute('aria-expanded', 'false');
            
            console.log('Мобильное меню закрыто');
        }
        
        // Закрытие меню при клике по фону
        nav.addEventListener('click', function(e) {
            // Если клик был по самому nav (фону), а не по ul или его содержимому
            if (e.target === nav) {
                closeMobileMenu();
            }
        });
        
        // Закрытие меню при нажатии Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('show')) {
                closeMobileMenu();
            }
        });
        
        // Закрытие меню при изменении размера окна (переход на десктоп)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && nav.classList.contains('show')) {
                closeMobileMenu();
            }
        });
        
        // Обработка кликов по пунктам меню
        document.addEventListener('click', function(e) {
            // Проверяем, что клик был по ссылке в мобильном меню
            if (e.target.tagName === 'A' && nav.classList.contains('show')) {
                const href = e.target.getAttribute('href');
                const currentPath = window.location.pathname;
                
                // Обработка якорных ссылок
                if (href && href.startsWith('#') && href !== '#') {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        closeMobileMenu();
                        setTimeout(() => {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }, 300);
                    }
                    return;
                }
                
                // Проверка, является ли ссылка текущей страницей
                const isCurrentPage = (
                    (currentPath.endsWith(href)) || 
                    (currentPath.endsWith('/') && href === 'index.html') ||
                    (currentPath === '/' && href === 'index.html') ||
                    href === '#'
                );
                
                if (isCurrentPage) {
                    e.preventDefault();
                    closeMobileMenu();
                    return;
                }
                
                // Для обычных ссылок - закрываем меню с небольшой задержкой
                setTimeout(() => {
                    closeMobileMenu();
                }, 100);
            }
        });
        
        // Отладочная информация
        console.log('Мобильное меню инициализировано');
    } else {
        console.warn('Элементы мобильного меню не найдены');
    }
    
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
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
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