// ========================================
// 1. MOBILE MENU
// ========================================

// HTML se menu button aur navigation ko select karo
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Menu button par click hone par
menuBtn.addEventListener("click", function () {

    // Navigation menu ko show/hide karo
    navLinks.classList.toggle("show");

    // Menu ke andar icon ko select karo
    const icon = menuBtn.querySelector("i");

    // Bars icon ko on/off karo
    icon.classList.toggle("fa-bars");

    // X icon ko on/off karo
    icon.classList.toggle("fa-xmark");
});


// ========================================
// 2. NAVIGATION LINK CLICK
// ========================================

// Saare navigation links ko select karo
const navLinksList = document.querySelectorAll(".nav-links a");

// Har link ke liye
navLinksList.forEach(function (link) {

    // Link par click hone par
    link.addEventListener("click", function () {

        // Mobile menu close karo
        navLinks.classList.remove("show");

        // Menu icon ko select karo
        const icon = menuBtn.querySelector("i");

        // X icon hatao
        icon.classList.remove("fa-xmark");

        // Bars icon lagao
        icon.classList.add("fa-bars");
    });
});


// ========================================
// 3. TYPING EFFECT
// ========================================

// HTML mein typing element ko select karo
const typingElement = document.getElementById("typing");

// Jo words screen par type honge
const words = [
    "Python Developer",
    "Web Developer",
    "Flask Developer",
    "SQL Developer",
    "Software Developer"
];

// Starting position
let wordIndex = 0;
let charIndex = 0;

// Starting mein deleting nahi ho rahi
let deleting = false;


// Typing function
function typingEffect() {

    // Current word nikalo
    const currentWord = words[wordIndex];

    // Agar deleting false hai → character add karo
    // Agar deleting true hai → character remove karo

    if (deleting === false) {

        charIndex++;

        typingElement.textContent =
            currentWord.substring(0, charIndex);

    } else {

        charIndex--;

        typingElement.textContent =
            currentWord.substring(0, charIndex);
    }


    // Agar pura word type ho gaya
    if (charIndex === currentWord.length) {

        // Ab deleting start karo
        deleting = true;

        // 1.5 second wait karo
        setTimeout(typingEffect, 1500);

        return;
    }


    // Agar pura word delete ho gaya
    if (charIndex === 0) {

        // Ab typing dobara start karo
        deleting = false;

        // Next word par jao
        wordIndex++;

        // Agar last word ke baad aa gaye
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }


    // Typing aur deleting ki speed
    if (deleting === true) {

        setTimeout(typingEffect, 60);

    } else {

        setTimeout(typingEffect, 100);
    }
}


// Typing effect start karo
typingEffect();


// ========================================
// 4. CONTACT FORM
// ========================================

// Form ko select karo
const contactForm = document.getElementById("contactForm");

// Message show karne wala element
const formMessage = document.getElementById("formMessage");


// Form submit hone par
contactForm.addEventListener("submit", function (event) {

    // Page reload hone se roko
    event.preventDefault();


    // Input values nikalo
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check karo koi field empty hai ya nahi
    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    // Email check karo
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Agar email galat hai
    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    // Sab kuch correct hai
    formMessage.textContent =
        "Message validated successfully!";


    // Form ko clear karo
    contactForm.reset();
});


// ========================================
// 5. CURRENT YEAR
// ========================================

// Current year nikalo
const currentYear = new Date().getFullYear();

// HTML mein year show karo
document.getElementById("year").textContent = currentYear;


// ========================================
// 6. ACTIVE NAVIGATION ON SCROLL
// ========================================

// Saare sections select karo
const sections = document.querySelectorAll("section");

// Saare navigation links select karo
const navItems = document.querySelectorAll(".nav-links a");


// Jab user scroll kare
window.addEventListener("scroll", function () {

    // Current section ka naam
    let currentSection = "";


    // Har section ko check karo
    sections.forEach(function (section) {

        // Section ki position check karo
        if (window.scrollY >= section.offsetTop - 150) {

            // Current section ki ID store karo
            currentSection = section.id;
        }
    });


    // Har navigation link ko check karo
    navItems.forEach(function (link) {

        // Link ka href nikalo
        const linkAddress = link.getAttribute("href");


        // Agar link current section ka hai
        if (linkAddress === "#" + currentSection) {

            // Active class add karo
            link.classList.add("active");

        } else {

            // Active class remove karo
            link.classList.remove("active");
        }
    });
}); 