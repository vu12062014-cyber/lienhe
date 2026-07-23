// ===============================
// Bánh Kem Hoa Hồng
// script.js
// ===============================

// Các biểu tượng bay
const particles = document.getElementById("particles");
const icons = ["💖","🌸","🌹","✨"];

function createParticle(){

    const p = document.createElement("div");

    p.className = "particle";

    p.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    p.style.left = Math.random()*100 + "vw";

    p.style.fontSize = (18 + Math.random()*18) + "px";

    p.style.animationDuration = (6 + Math.random()*5) + "s";

    p.style.opacity = Math.random()*0.5 + 0.5;

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },11000);

}

setInterval(createParticle,300);

// Bong bóng Hello
const speech = document.querySelector(".speech");

setInterval(()=>{

    speech.animate([
        {transform:"translateY(0px)"},
        {transform:"translateY(-8px)"},
        {transform:"translateY(0px)"}
    ],{
        duration:1800
    });

},1800);

// Chibi nhún nhẹ
const chibi = document.querySelector(".chibi");

setInterval(()=>{

    chibi.animate([
        {transform:"translateY(0px)"},
        {transform:"translateY(-12px)"},
        {transform:"translateY(0px)"}
    ],{
        duration:2500
    });

},2500);

// Hiệu ứng hover nút
document.querySelectorAll(".link").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 30px rgba(255,105,180,.6)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="";

    });

});

// Card nghiêng theo chuột (chỉ trên máy tính)
const card = document.querySelector(".card");

if(window.innerWidth > 768){

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*8;
    const y=(e.clientY/window.innerHeight-.5)*8;

    card.style.transform=
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

}
