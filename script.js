// ANIMAÇÃO AO ROLAR

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=> observer.observe(el));


// CONTADOR ANIMADO

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// EFEITO PARALLAX HERO

window.addEventListener("scroll", ()=>{

    const scroll = window.pageYOffset;

    const hero = document.querySelector(".hero-content");

    hero.style.transform = `translateY(${scroll * 0.2}px)`;

});


// BOTÃO SUAVE

const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", ()=>{

    btn.style.transform = "scale(1.05)";

});

btn.addEventListener("mouseleave", ()=>{

    btn.style.transform = "scale(1)";

});
