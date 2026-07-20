/* =====================================================
   PORTFOLIO SCRIPT
   Author : Syahran Hauli
===================================================== */

/* ==============================
   AOS Animation
============================== */

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

/* ==============================
   Typing Animation
============================== */

new Typed("#typing", {
    strings: [
        "Data Analyst",
        "Machine Learning Enthusiast",
        "Python Developer",
        "SQL Developer",
        "Data Visualization"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
});

/* ==============================
   Navbar Scroll Effect
============================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.35)";
        navbar.style.padding = "12px 0";

    } else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 0";

    }

});

/* ==============================
   Active Menu
============================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==============================
   Smooth Scroll
============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* ==============================
   Scroll Progress Bar
============================== */

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            let width = entry.target.style.width;

            entry.target.style.width = "0";

            setTimeout(() => {

                entry.target.style.transition = "1.5s";
                entry.target.style.width = width;

            }, 300);

        }

    });

});

progressBars.forEach(bar => {

    progressObserver.observe(bar);

});

/* ==============================
   Reveal Project Cards
============================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = ".8s";

    }, 200);

});

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    cardObserver.observe(card);

});

/* ==============================
   Hero Image Floating Animation
============================== */

const heroImage = document.querySelector(".hero-image");

let direction = 1;

setInterval(() => {

    heroImage.style.transform = `translateY(${direction * 10}px)`;

    direction *= -1;

}, 2000);

/* ==============================
   Back To Top Button
============================== */

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.id = "backToTop";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563EB";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==============================
   Hover Glow Effect
============================== */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(59,130,246,.35),
            #1E293B 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1E293B";

    });

});

/* ==============================
   Footer Year
============================== */

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Syahran Hauli. All Rights Reserved.`;

/* ==============================
   Console Message
============================== */

console.log("%cWelcome to Syahran's Portfolio",
"color:#3B82F6;font-size:18px;font-weight:bold");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:#94A3B8;font-size:14px");