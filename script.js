// Floating Emojis
const emojis = ["❤️", "😍", "😂", "🎉", "🐷", "🍫", "💌", "🌙", "😜"];
const emojiContainer = document.getElementById("emojiContainer");

function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    emoji.style.top = Math.random() * 100 + "vh"; // Random vertical position
    emoji.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random animation speed
    emojiContainer.appendChild(emoji);

    // Remove emoji after animation ends
    setTimeout(() => {
        emoji.remove();
    }, 5000); // Match the animation duration
}

// Create floating emojis every 500ms
setInterval(createFloatingEmoji, 500);

// Intro Button
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("stage1").classList.remove("hidden");
});

// Stage 1 Buttons
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Stage 2 Buttons
document.getElementById("yesButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
});

document.getElementById("noButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Stage 3 - Only "No" button should work
document.getElementById("noButton3").addEventListener("click", function() {
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Gift Button - Shows gift message without affecting the final stage
document.getElementById("giftButton").addEventListener("click", showGift);
document.getElementById("giftButton").addEventListener("touchstart", showGift);

function showGift(event) {
    event.stopPropagation(); // Prevents any unintended hiding of content
    document.getElementById("giftMessage").classList.remove("hidden");
}

// Go To Button - Triggers the monkey teasing stage
document.getElementById("goToButton").addEventListener("click", function() {
    document.getElementById("finalStage").classList.add("hidden");
    document.getElementById("monkeyStage").classList.remove("hidden");

    // Slide out the monkey GIF after 1 second
    setTimeout(() => {
        document.querySelector(".monkey-gif img").classList.add("slide-out");
    }, 1000);

    // Start live typing the message
    liveTypeMessage();
});

// Function to simulate live typing
function liveTypeMessage() {
    const message = `It’s not about the words. It’s not about the emojis. It’s not even about the chocolates 🍫 (or is it?). But somehow, it’s about you.

You’re the one who gets it. The one who decodes the chaos. The one who knows the moon 🌙 isn’t just a moon, and forever isn’t just a word.

So here’s to you, bestie— my cosmic co-conspirator. 💌 
P.S. The chocolates 🍫🍫🍫? They’re not real. But the chaos? Oh, that’s 100% yours. 😉`;

    const messageElement = document.getElementById("liveMessage");
    let index = 0;

    function type() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }

    type();
}


