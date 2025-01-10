// Функция для открытия и закрытия модального окна
function showModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Фиксирование header при прокрутке
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
// static/script.js

document.addEventListener("DOMContentLoaded", function () {
    // Добавляем плавную прокрутку к якорным ссылкам
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Добавляем всплывающие подсказки на страницы с описанием
    const infoElements = document.querySelectorAll('.info-tooltip');
    infoElements.forEach(el => {
        el.addEventListener('mouseover', function () {
            el.classList.add('highlight');
        });
        el.addEventListener('mouseleave', function () {
            el.classList.remove('highlight');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle("show");
    });

    // Закрытие выпадающего меню при клике вне области меню
    window.addEventListener("click", function() {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
        }
    });
});
// JavaScript для добавления легкой анимации на карточки цен
document.addEventListener("DOMContentLoaded", () => {
    const pricingCards = document.querySelectorAll(".pricing-card");

    pricingCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
// JavaScript для анимации кнопок "Узнать больше"
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".learn-more");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Раскрытие подменю для раздела "О центре"
    const aboutMenu = document.querySelector('.about-menu');
    const aboutButton = document.querySelector('.about-button');

    if (aboutButton && aboutMenu) {
        aboutButton.addEventListener('click', () => {
            aboutMenu.classList.toggle('visible');
        });
    }

    // Адаптивное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}


function toggleFaq(element) {
    const answer = element.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // Бесконечный слайдер
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("dark-mode-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", currentTheme);
    toggle.checked = currentTheme === "dark";

    toggle.addEventListener("change", () => {
        const theme = toggle.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    });
});
