const story = {
    start: {
        text: "You wake up in a dark forest. You see two paths ahead.",
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" }
        ],
        image:"images/forest.jpg"
    },
    leftPath: {
        text: "You find an old cabin. Do you enter or walk past?",
        choices: [
            { text: "Enter the cabin", next: "cabinInside" },
            { text: "Walk past", next: "cabinIgnored" }
        ],
        image:"images/cabin.jpg"
    },
    rightPath: {
        text: "You find a river with a boat and a bridge. Which do you take?",
        choices: [
            { text: "Take the boat", next: "boat" },
            { text: "Cross the bridge", next: "bridge" }
        ],
        image:"images/river.jpg"
    },
    boat: {
        text: "The boat sinks! You struggle to swim but find an island.",
        choices: [
            { text: "Explore the island", next: "island" },
            { text: "Try to swim back", next: "drown" }
        ],
        image:"images/boat.jpg"
    },
    island: {
        text: "You find a hidden treasure. You win!",
        choices: [],
        image:"images/treasure.jpg"
    },
    drown: {
        text: "You struggle against the current and drown. Game over.",
        choices: [],
        image:"images/drown.jpg"
    },
    bridge: {
        text: "The bridge collapses! You fall into the river and find a hidden cave.",
        choices: [
            { text: "Enter the cave", next: "cave" },
            { text: "Try to climb back up", next: "climbFail" }
        ],
        image:"images/bridge.jpg"
    },
    cave: {
        text: "Inside the cave, you find a sleeping dragon. You win!",
        choices: [],
        image:"images/dragon.jpg"
    },
    climbFail: {
        text: "You slip and fall back into the river. Game over.",
        choices: [],
        image:"images/fall.jpg"
    },
    cabinInside: {
        text: "Inside the cabin, you find a hidden door leading to a treasure room!",
        choices: [],
        image:"images/cabin_inside.jpg"
    },
    cabinIgnored: {
        text: "You walk past the cabin and get lost in the forest. Game over.",
        choices: [],
        image:"images/lost.jpg"
    }
};

function startGame() {
    document.getElementById("restart-button").style.display = "none";
    updateStory("start");
}

function updateStory(stage) {
    console.log("Current Stage: ", stage);
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
