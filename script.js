document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const intro = document.getElementById("intro");
    const stage1 = document.getElementById("stage1");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const stage2 = document.getElementById("stage2");
    const yesButton2 = document.getElementById("yesButton2");
    const noButton2 = document.getElementById("noButton2");
    const stage3 = document.getElementById("stage3");
    const yesButton3 = document.getElementById("yesButton3");
    const noButton3 = document.getElementById("noButton3");
    const finalStage = document.getElementById("finalStage");
    const giftButton = document.getElementById("giftButton");
    const giftMessage = document.getElementById("giftMessage");

    // Start Button Click
    startButton.addEventListener("click", function () {
        intro.classList.add("hidden");
        stage1.classList.remove("hidden");
    });

    // Stage 1
    yesButton.addEventListener("click", function () {
        stage1.classList.add("hidden");
        stage2.classList.remove("hidden");
    });

    noButton.addEventListener("click", function () {
        stage1.classList.add("hidden");
        finalStage.classList.remove("hidden");
    });

    // Stage 2
    yesButton2.addEventListener("click", function () {
        stage2.classList.add("hidden");
        stage3.classList.remove("hidden");
    });

    noButton2.addEventListener("click", function () {
        stage2.classList.add("hidden");
        finalStage.classList.remove("hidden");
        let finalText = document.createElement("p");
        finalText.textContent = "OH.! Finally, you realized!";
        finalText.classList.add("realization-text");
        finalStage.insertBefore(finalText, finalStage.firstChild);
    });

    noButton3.addEventListener("click", function () {
        stage3.classList.add("hidden");
        finalStage.classList.remove("hidden");
    });

    giftButton.addEventListener("click", function () {
        finalStage.innerHTML = "";
        giftMessage.classList.remove("hidden");
    });

    // Floating Emoji Effect
    function createEmoji() {
        const emojis = ["❤️", "💌", "🌹", "🎀", "💘", "💝"];
        const emojiContainer = document.getElementById("emojiContainer");

        for (let i = 0; i < 5; i++) {
            const emoji = document.createElement("div");
            emoji.classList.add("emoji");
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 90}vw`;
            emojiContainer.appendChild(emoji);
        }
    }

    createEmoji();
});
