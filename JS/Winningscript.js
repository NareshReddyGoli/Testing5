// Function to get URL parameters
function getQueryParams() {
  let params = new URLSearchParams(window.location.search);
  return {
    wpm: params.get("wpm") || 0,
    accuracy: params.get("accuracy") || 0,
  };
}

// Fetch values from URL
let { wpm, accuracy } = getQueryParams();

// Set values in HTML
document.getElementById("typingSpeed").textContent = wpm;
document.getElementById("accuracy").textContent = accuracy;

// Determine Grade & Suggestions
let gradeElement = document.getElementById("grade");
let suggestionElement = document.getElementById("suggestions");

if (wpm >= 40 && accuracy >= 95) {
  gradeElement.textContent = "Grade: A (Excellent)";
  gradeElement.classList.add("A");
  suggestionElement.textContent = "Amazing speed! You're a typing pro!";
} else if (wpm >= 20 && accuracy >= 85) {
  gradeElement.textContent = "Grade: B (Good)";
  gradeElement.classList.add("B");
  suggestionElement.textContent = "Great job! Try to increase accuracy.";
} else if (wpm >= 15 && accuracy >= 70) {
  gradeElement.textContent = "Grade: C (Average)";
  gradeElement.classList.add("C");
  suggestionElement.textContent = "Keep practicing to reach higher speeds!";
} else {
  gradeElement.textContent = "Grade: D (Needs Improvement)";
  gradeElement.classList.add("D");
  suggestionElement.textContent = "Focus on accuracy and typing consistently.";
}
function restartTest() {
  window.location.href = "SpeedType.html"; // Redirect to the typing test
}
