// ==========================
// Premium Landing Page Effects
// ==========================

const particles = document.getElementById("particles");
const card = document.querySelector(".card");

// Các biểu tượng rơi
const icons = ["❤️","💖","💕","🌸","🌹","🌺","✨"];

// ==========================
// Tim bay + Hoa rơi
// ==========================

function createParticle(){

    const item = document.createElement("div");

    item.className = "particle";

    item.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    item.style.left = Math.random()*100 + "vw";

    item.style.fontSize = (18 + Math.random()*20) + "px";

    item.style.animationDuration = (6 + Math.random()*5) + "s";

    item.style.opacity = 0.5 + Math.random()*0.5;

    particles.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },12000);

}

setInterval(createParticle,220);

// ==========================
// Card 3D theo chuột
// ==========================

document.addEventListener("mousemove",(e)=>{

    const x = (e.clientX/window.innerWidth - 0.5) * 18;
    const y = (e.clientY/window.innerHeight - 0.5) * 18;

    card.style.transform =
    `rotateY(${x}deg)
     rotateX(${-y}deg)`;

});

// Reset khi chuột ra ngoài

document.addEventListener("mouseleave",()=>{

    card.style.transform =
    "rotateX(0deg) rotateY(0deg)";

});

// ==========================
// Chibi nổi nhẹ
// ==========================

const chibi = document.querySelector(".chibi");

setInterval(()=>{

    chibi.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-10px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2500

    });

},2500);

// ==========================
// Hello nhún
// ==========================

const hello = document.querySelector(".hello");

setInterval(()=>{

    hello.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:1800

    });

},1800);

// ==========================
// Hiệu ứng nút
// ==========================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";
        btn.style.boxShadow="0 0 30px rgba(255,105,180,.45)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";
        btn.style.boxShadow="";

    });

});

// ==========================
// Click tạo tim
// ==========================

document.addEventListener("click",(e)=>{

    const heart = document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="28px";

    heart.style.pointerEvents="none";

    heart.style.transition="all 1s ease";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-100px) scale(2)";
        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1100);

});

// ==========================
// Hạt sáng nền
// ==========================

function sparkle(){

    const s=document.createElement("div");

    s.style.position="fixed";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.width="4px";
    s.style.height="4px";
    s.style.background="#fff";
    s.style.borderRadius="50%";
    s.style.boxShadow="0 0 12px #fff";
    s.style.opacity="0";
    s.style.pointerEvents="none";
    s.style.zIndex="1";
    s.style.transition="all 2s linear";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.style.opacity="1";
    },50);

    setTimeout(()=>{
        s.style.opacity="0";
        s.style.transform="scale(3)";
    },1500);

    setTimeout(()=>{
        s.remove();
    },2200);

}

setInterval(sparkle,250);
