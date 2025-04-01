// Story structure as an object
const story = {
    start: {
        text: "You wake up in a dark forest. You see two paths ahead.",
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" }
        ],
        image: "images/forest.jpg"
    },
    leftPath: {
        text: "You find an old cabin. Do you enter or walk past?",
        choices: [
            { text: "Enter the cabin", next: "cabinInside" },
            { text: "Walk past", next: "cabinIgnored" }
        ],
        image: "images/cabin.jpg"
    },
    rightPath: {
        text: "You find a river. There's a boat and a bridge. Which do you take?",
        choices: [
            { text: "Take the boat", next: "boat" },
            { text: "Cross the bridge", next: "bridge" }
        ],
        image: "images/river.jpg"
    },
    cabinInside: {
        text: "Inside, you find a treasure chest. You win!",
        choices: [],
        image: "images/treasure.jpg"
    },
    cabinIgnored: {
        text: "You walk deeper into the forest and get lost. Game over.",
        choices: [],
        image: "images/lost.jpg"
    },
    boat: {
        text: "The boat sinks! You struggle to swim. Game over.",
        choices: [],
        image: "images/boat_sink.jpg"
    },
    bridge: {
        text: "The bridge collapses! You fall into the river. Game over.",
        choices: [],
        image: "images/bridge_fall.jpg"
    }
};

// Function to start the game
function startGame() {
    updateStory("start");
}

// Function to update the story based on the player's choice
function updateStory(stage) {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choicesContainer = document.getElementById("choices-container");

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
        const restartButton = document.getElementById("restart-button");
        restartButton.style.display = "block";
    }
}

// Start game on page load
window.onload = startGame;
