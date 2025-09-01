// 🎯 Part 1: Variables and Conditionals
let correctAnswers = 0;
let userAnswer = "";

function checkAnswer() {
  userAnswer = document.getElementById("sportInput").value.toLowerCase();
  const worldCupWinners = ["brazil", "germany", "france", "italy", "argentina", "spain", "england", "uruguay"];
  let feedback = "";

  if (worldCupWinners.includes(userAnswer)) {
    feedback = `✅ Correct! ${capitalize(userAnswer)} is a World Cup champion.`;
    correctAnswers++;
  } else {
    feedback = `❌ Not quite. ${capitalize(userAnswer)} hasn’t won the FIFA World Cup.`;
  }

  document.getElementById("feedback").textContent = feedback;
}

// ❤️ Part 2: Custom Functions
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function showScore() {
  const scoreText = `🏅 You’ve scored ${correctAnswers} point(s) so far.`;
  document.getElementById("scoreDisplay").textContent = scoreText;
}

// 🔁 Part 3: Loops
function listChampions() {
  const champions = ["Michael Jordan", "Usain Bolt", "Serena Williams", "Lionel Messi", "Simone Biles"];
  const outputDiv = document.getElementById("loopOutput");
  outputDiv.innerHTML = "<h3>Legendary Champions:</h3>";

  champions.forEach((athlete, index) => {
    outputDiv.innerHTML += `<p>${index + 1}. ${athlete}</p>`;
  });

  for (let i = 0; i < 3; i++) {
    outputDiv.innerHTML += `<p>🏁 Tip ${i + 1}: Stay focused and train smart!</p>`;
  }
}

// 🌐 Part 4: DOM Interactions
function toggleBonus() {
  const box = document.getElementById("toggleBox");
  box.classList.toggle("hidden");
}