/* ===========================================================
   PORTFOLIO
   Syahran Hauli Fadhillah
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
       AOS
    =========================================== */

    AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
    });

    /* ===========================================
       TYPING EFFECT
    =========================================== */

    new Typed("#typing", {

        strings: [

            "Data Analyst",
            "Machine Learning Enthusiast",
            "SQL Developer",
            "Python Developer"

        ],

        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1800,
        loop: true

    });

    /* ===========================================
       NAVBAR SCROLL
    =========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            navbar.style.padding = "12px 0";
            navbar.style.background = "rgba(2,6,23,.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        }else{

            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(15,23,42,.75)";
            navbar.style.boxShadow = "none";

        }

    });

    /* ===========================================
       ACTIVE NAVBAR
    =========================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.clientHeight;

            if(pageYOffset >= top){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ===========================================
       SMOOTH SCROLL
    =========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior:"smooth"

            });

        });

    });

    /* ===========================================
       FADE UP
    =========================================== */

    const revealElements = document.querySelectorAll(

        ".project-card,.certificate-card,.skill-card,.info-card,.timeline-content,.education-card,.contact-card"

    );

    function reveal(){

        revealElements.forEach(el=>{

            const top = el.getBoundingClientRect().top;

            if(top < window.innerHeight-100){

                el.style.opacity="1";
                el.style.transform="translateY(0)";

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);

    /* ===========================================
       COUNTER
    =========================================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        counter.innerText="0";

        const updateCounter=()=>{

            const target=+counter.getAttribute("data-target");

            const current=+counter.innerText;

            const increment=target/80;

            if(current<target){

                counter.innerText=Math.ceil(current+increment);

                setTimeout(updateCounter,20);

            }

            else{

                counter.innerText=target;

            }

        }

        updateCounter();

    });

    /* ===========================================
       PROGRESS BAR
    =========================================== */

    const bars=document.querySelectorAll(".progress-bar");

    bars.forEach(bar=>{

        const value=bar.style.width;

        bar.style.width="0";

        setTimeout(()=>{

            bar.style.width=value;

        },500);

    });

    /* ===========================================
       IMAGE PARALLAX
    =========================================== */

    const heroImage=document.querySelector(".hero-image");

    window.addEventListener("mousemove",(e)=>{

        let x=(window.innerWidth/2-e.pageX)/40;

        let y=(window.innerHeight/2-e.pageY)/40;

        heroImage.style.transform=

        `translate(${x}px,${y}px)`;

    });

});

/* ===========================================
   BACK TO TOP
=========================================== */

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ===========================================
   LOADING
=========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ===========================================
   PROJECT CARD EFFECT
=========================================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/* ===========================================
   CERTIFICATE EFFECT
=========================================== */

document.querySelectorAll(".certificate-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 25px 50px rgba(37,99,235,.35)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

/* ===========================================
   CONTACT EFFECT
=========================================== */

document.querySelectorAll(".contact-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/* ===========================================
   COPYRIGHT YEAR
=========================================== */

const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=`© ${year} Syahran Hauli Fadhillah. All Rights Reserved.`;

}

console.log(

"%cPortfolio Loaded Successfully",

"color:#3b82f6;font-size:18px;font-weight:bold"

);
