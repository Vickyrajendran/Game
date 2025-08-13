let randomNum = Math.floor(Math.random() * 100) + 1;
let timeLeft = 30;
let timerEl = document.getElementById("timer");
let msg = document.getElementById("msg");

function guessing() {
    let guess = parseInt(document.getElementById("guessInput").value);
    
    if (guess === randomNum) {
        msg.textContent = "🚀 Correct!";
        msg.style.color = "lime";
        screenFlash();
        particleExplosion();
        clearInterval(countdown);
    } else {
        msg.textContent = guess > randomNum ? "📉 Too High!" : "📈 Too Low!";
        msg.style.color = "yellow";
        msg.classList.add("shake");
        setTimeout(() => msg.classList.remove("shake"), 500);
    }
}
let countdown = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏳ Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        msg.textContent = "⏰ Time's Up!";
        msg.style.color = "red";
    }
}, 1000);

function screenFlash() {
    let flash = document.createElement("div");
    flash.classList.add("flash");
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 200);
}
function particleExplosion() {
    for (let i = 0; i < 40; i++) {
        let particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.width = "8px";
        particle.style.height = "8px";
        particle.style.background = randomColor();
        particle.style.top = "50%";
        particle.style.left = "50%";
        particle.style.borderRadius = "50%";
        document.body.appendChild(particle);

        let x = (Math.random() - 0.5) * 800;
        let y = (Math.random() - 0.5) * 800;

        particle.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], { duration: 1000, easing: "ease-out" });

        setTimeout(() => particle.remove(), 1000);
    }
}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
