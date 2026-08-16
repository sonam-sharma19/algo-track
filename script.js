// AlgoTrack JavaScript

console.log("AlgoTrack loaded successfully!");

// Problem Counter

let problemsSolved = 0;

const problemCount = document.getElementById("problems-solved");
const solveButton = document.getElementById("solve-btn");

solveButton.addEventListener("click", function () {
    problemsSolved++;
    problemCount.textContent = problemsSolved;
});

// Topics Completed Counter

let topicsCompleted = 0;

const topicCount = document.getElementById("topics-completed");
const topicButton = document.getElementById("topic-btn");

topicButton.addEventListener("click", function () {
    topicsCompleted++;
    topicCount.textContent = topicsCompleted;
});

// Daily Streak

let streak = Number(localStorage.getItem("streak")) || 0;
let lastPracticeDate = localStorage.getItem("lastPracticeDate");

const streakCount = document.getElementById("streak-count");
const streakButton = document.getElementById("streak-btn");

function updateStreak() {
    streakCount.textContent = `${streak} Days`;
}

streakButton.addEventListener("click", function () {
    const today = new Date().toDateString();

    if (lastPracticeDate === today) {
        alert("You've already practiced today! 🔥");
        return;
    }

    streak++;

    localStorage.setItem("streak", streak);
    localStorage.setItem("lastPracticeDate", today);

    lastPracticeDate = today;

    updateStreak();
});

updateStreak();