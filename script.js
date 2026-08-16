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