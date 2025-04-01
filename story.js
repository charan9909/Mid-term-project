// Story structure as an object
const story = {
    start: {
        text: "You wake up in a dark forest. You see two paths ahead.",
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" }
        ],
        image: "images/forest.jpg" // Image of a dark forest
    },
    leftPath: {
        text: "You find an old cabin. Do you enter or walk past?",
        choices: [
            { text: "Enter the cabin", next: "cabinInside" },
            { text: "Walk past", next: "cabinIgnored" }
        ],
        image: "images/cabin.jpg" // Image of an old cabin
    },
    rightPath: {
        text: "You find a river with a boat and a bridge. Which do you take?",
        choices: [
            { text: "Take the boat", next: "boat" },
            { text: "Cross the bridge", next: "bridge" }
        ],
        image: "images/river.jpg" // Image of a river with a boat and bridge
    },
    cabinInside: {
        text: "Inside, you find a hidden door leading to a secret passage.",
        choices: [
            { text: "Go through the door", next: "secretRoom" },
            { text: "Leave the cabin", next: "cabinIgnored" }
        ],
        image: "images/secret_door.jpg" // Image of a hidden door in a cabin
    },
    secretRoom: {
        text: "You discover a magical artifact. You win!",
        choices: [],
        image: "images/artifact.jpg" // Image of a magical artifact
    },
    cabinIgnored: {
        text: "You walk deeper into the forest and get lost. Game over.",
        choices: [],
        image: "images/lost.jpg" // Image of a dense forest
    },
    boat: {
        text: "The boat sinks! You struggle to swim but find an island.",
        choices: [
            { text: "Explore the island", next: "island" },
            { text: "Try to swim back", next: "drown" }
        ],
        image: "images/boat_sink.jpg" // Image of a sinking boat
    },
    island: {
        text: "You find a hidden treasure. You win!",
        choices: [],
        image: "images/treasure_island.jpg" // Image of a treasure chest on an island
    },
    drown: {
        text: "You struggle against the current and drown. Game over.",
        choices: [],
        image: "images/drown.jpg" // Image of someone drowning
    },
    bridge: {
        text: "The bridge collapses! You fall into the river and find a hidden cave.",
        choices: [
            { text: "Enter the cave", next: "cave" },
            { text: "Try to climb back up", next: "climbFail" }
        ],
        image: "images/bridge_fall.jpg" // Image of a collapsing bridge
    },
    cave: {
        text: "Inside the cave, you find a sleeping dragon. You win!",
        choices: [],
        image: "images/dragon.jpg" // Image of a sleeping dragon in a cave
    },
    climbFail: {
        text: "You slip and fall back into the river. Game over.",
        choices: [],
        image: "images/fall.jpg" // Image of someone falling into a river
    }
};

// Function to start the game
function startGame() {
    document.getElementById("restart-button").style.display = "none";
    updateStory("start");
}

// Function to update the story based on the player's choice
function updateStory(stage) {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choicesContainer = document.getElementById("choices-container");
    const restartButton = document.getElementById("restart-button");

    // Get current stage of story
    const currentStage = story[stage];

    // Update text and image
    storyText.textContent = currentStage.text;
    storyImage.src = currentStage.image;

    // Clear previous choices
    choicesContainer.innerHTML = "";

    // Display new choices if available
    if (currentStage.choices.length > 0) {
        currentStage.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => updateStory(choice.next);
            choicesContainer.appendChild(button);
        });
    } else {
        // If no choices, display restart button
        restartButton.style.display = "block";
    }
}

// Start game on page load
window.onload = startGame;

