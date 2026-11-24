
// Mobile navigation

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a link

const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// Scroll reveal animation

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .education, .contact"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});
