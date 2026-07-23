// =========================
// Hoa hồng và tim bay
// =========================

const container = document.getElementById("flowers");

const icons = ["🌹","💖","🌸","✨"];

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    flower.style.left = Math.random()*100+"vw";

    flower.style.animationDuration = (6+Math.random()*5)+"s";

    flower.style.opacity = Math.random()*0.5+0.5;

    flower.style.fontSize = (20+Math.random()*20)+"px";

    container.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },12000);

}

setInterval(createFlower,350);


// =========================
// Hello nhấp nháy
// =========================

const hello=document.querySelector(".hello");

setInterval(()=>{

    hello.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.08)"},
        {transform:"scale(1)"}
    ],{
        duration:800
    });

},1800);


// =========================
// Card nghiêng theo chuột
// =========================

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*12;

    const y=(e.clientY/window.innerHeight-.5)*12;

    card.style.transform=
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});


// =========================
// Nút Facebook/Zalo phát sáng
// =========================

document.querySelectorAll(".fb,.zalo").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 30px rgba(255,105,180,.7)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="";

    });

});


// =========================
// Chữ đổi màu nhẹ
// =========================

const colors=[
"#ff4f93",
"#ff6699",
"#ff3f7d",
"#ff5ea8"
];

let i=0;

setInterval(()=>{

    hello.style.background=colors[i];

    i++;

    if(i>=colors.length){

        i=0;

    }

},1200);
