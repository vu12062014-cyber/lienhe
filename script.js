// Tim bay
const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "🌹";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 400);

// Chữ Hello nhấp nháy
const hello = document.querySelector(".hello");

let visible = true;

setInterval(() => {
    visible = !visible;
    hello.style.opacity = visible ? "1" : "0.6";
}, 700);

// Hiệu ứng nổi nhẹ cho card
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});
function showQR(type){

document.getElementById("qr-facebook")
.classList.add("qr-hide");

document.getElementById("qr-zalo")
.classList.add("qr-hide");


if(type==="facebook"){

document.getElementById("qr-facebook")
.classList.remove("qr-hide");

}


if(type==="zalo"){

document.getElementById("qr-zalo")
.classList.remove("qr-hide");

}

}
