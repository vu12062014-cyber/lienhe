// =====================
// VIP EFFECT
// =====================

// Hoa, tim, lấp lánh
const particles = document.getElementById("particles");
const icons = ["🌸","🌹","💖","✨","💕","🌺"];

function createParticle(){

    const p=document.createElement("div");

    p.className="particle";

    p.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    p.style.left=Math.random()*100+"vw";

    p.style.fontSize=(18+Math.random()*22)+"px";

    p.style.animationDuration=(6+Math.random()*6)+"s";

    p.style.opacity=Math.random();

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

}

setInterval(createParticle,250);

// =====================
// CARD 3D
// =====================

const card=document.querySelector(".glass");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*16;

    const y=(e.clientY/window.innerHeight-.5)*16;

    card.style.transform=
    `rotateY(${x}deg)
     rotateX(${-y}deg)`;

});

// =====================
// Avatar nổi
// =====================

const avatar=document.querySelector(".avatar");

setInterval(()=>{

avatar.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:2500

});

},2500);

// =====================
// Hello nhún
// =====================

const hello=document.querySelector(".hello");

setInterval(()=>{

hello.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:1800

});

},1800);

// =====================
// Button Glow
// =====================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 30px rgba(255,105,180,.6)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});

// =====================
// Click Effect
// =====================

document.addEventListener("click",e=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="28px";

heart.style.pointerEvents="none";

heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px) scale(2)";
heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1200);

});
