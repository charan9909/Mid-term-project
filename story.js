const story = {
    start: {
        text: "You wake up in a dark forest. You see two paths ahead.",
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" }
        ],
        image: "https://tse2.mm.bing.net/th?id=OIP.MoUfKz-5cMf23RX2R2KQ7wHaE8&pid=Api"
    },
    leftPath: {
        text: "You find an old cabin. Do you enter or walk past?",
        choices: [
            { text: "Enter the cabin", next: "cabinInside" },
            { text: "Walk past", next: "cabinIgnored" }
        ],
        image: "https://tse2.mm.bing.net/th?id=OIP.73UHPGHDfcH-6QxuDhx5DAHaFj&pid=Api"
    },
    rightPath: {
        text: "You find a river with a boat and a bridge. Which do you take?",
        choices: [
            { text: "Take the boat", next: "boat" },
            { text: "Cross the bridge", next: "bridge" }
        ],
        image: "https://tse4.mm.bing.net/th?id=OIP.Me9tWxu3vv6TAFbVECATCQHaEo&pid=Api"
    },
    boat: {
        text: "The boat sinks! You struggle to swim but find an island.",
        choices: [
            { text: "Explore the island", next: "island" },
            { text: "Try to swim back", next: "drown" }
        ],
        image: "https://tse3.mm.bing.net/th?id=OIP.TSbRcYh18b2wH0JC6oyGFwHaE8&pid=Api"
    },
    island: {
        text: "You find a hidden treasure. You win!",
        choices: [],
        image: "https://tse3.mm.bing.net/th?id=OIP.TSbRcYh18b2wH0JC6oyGFwHaE8&pid=Api"
    },
    drown: {
        text: "You struggle against the current and drown. Game over.",
        choices: [],
        image: "https://tse3.mm.bing.net/th?id=OIP.TSbRcYh18b2wH0JC6oyGFwHaE8&pid=Api"
    },
    bridge: {
        text: "The bridge collapses! You fall into the river and find a hidden cave.",
        choices: [
            { text: "Enter the cave", next: "cave" },
            { text: "Try to climb back up", next: "climbFail" }
        ],
        image: "https://tse3.mm.bing.net/th?id=OIP.TSbRcYh18b2wH0JC6oyGFwHaE8&pid=Api"
    },
    cave: {
        text: "Inside the cave, you find a sleeping dragon. You win!",
        choices: [],
        image: "https://tse3.mm.bing.net/th?id=OIP.TSbRcYh18b2wH0JC6oyGFwHaE8&pid=Api"
    },
    climbFail: {
        text: "You slip and fall back into the river. Game over.",
        choices: [],
        image: "https://tse3.mm.bing.net/th?id=OIP.TSbRcYh18b2wH0JC6oyGFwHaE8&pid=Api"
    }
};

function startGame() {
    document.getElementById("restart-button").style.display = "none";
    updateStory("start");
}

function updateStory(stage) {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choicesContainer = document.getElementById("choices-container");
    const restartButton = document.getElementById("restart-button");

    const currentStage = story[stage];
    storyText.textContent = currentStage.text;
    storyImage.src = currentStage.image;
    choicesContainer.innerHTML = "";

    if (currentStage.choices.length > 0) {
        currentStage.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => updateStory(choice.next);
            choicesContainer.appendChild(button);
        });
    } else {
        restartButton.style.display = "block";
    }
}

window.onload = startGame;
