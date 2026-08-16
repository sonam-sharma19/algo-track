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