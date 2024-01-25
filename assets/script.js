// Sample questions and answers. grouped by object/arrays. got help with this from stack over flow dont forget to site
const questions = [
  {
      question: "What is the capital of France?",
      answers: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris"
  },
  {
      question: "Which programming language is known for building web pages?",
      answers: ["Java", "Python", "HTML", "C++"],
      correctAnswer: "HTML"
  },
  {
      question: "What does CSS stand for?",
      answers: ["Counter-Strike: Source", "Corrective Style Sheet", "Computer Style Sheet", "Cascading Style Sheet"],
      correctAnswer: "Cascading Style Sheet"
  },
  {
      question: "Who is the CEO of Tesla?",
      answers: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
      correctAnswer: "Elon Musk"
  },
  {
      question: "In JavaScript, what is a variable?",
      answers: ["A type of function", "A container for storing data values", "A conditional statement", "A loop"],
      correctAnswer: "A container for storing data values"
  },
  {
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter"
  }
];

// Variables to track quiz state
let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

// DOM elements
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const timeElement = document.getElementById("time");
const saveScoreButton = document.getElementById("save-score-btn");

// Event listener for the start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // Hide the start button
  //need to add a exit button CIRCLE BACK!
  startButton.style.display = "none";
  // Show the question container
  questionContainer.style.display = "block";
  // Display the first question
  showQuestion();
  // Start the timer
  startTimer();
}

function showQuestion() {
  // Retrieve current question
  const currentQuestion = questions[currentQuestionIndex];
  // Display question text
  //ask for help
  var testArray = Object.values(currentQuestion);//help from vinny. hopefully this works
  questionElement.textContent = testArray[0];//help from vinny,Z.
  //create answer choice buttons
  const answerContainer = document.getElementById("question-container");
  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.className = "choice-btn";
      button.onclick = function() {
          checkAnswer(this);
      };
      answerContainer.appendChild(button);
  });
}

function checkAnswer(selectedButton) {
  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];
  // Get the user's selected answer
  const userAnswer = selectedButton.textContent;

  // Show the result for a brief moment
  showResult("Next Question");

  // Move to the next question or end the quiz. still need to add "attempt to quit BUTTON. circle back"
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      // If there are more questions, move to the next one after a delay
      setTimeout(() => {
          showQuestion();
          resultContainer.style.display = "none"; //come back to this to get the questions to show p on screen
      }, 1000);
  } else {
      // If all questions are answered, end the quiz
      endQuiz();
  }
}

function showResult(message) {
  // Show container with message
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `<p>${message}</p>`;
}

function startTimer() {
  // Set up the timer to take away time every second
  timerInterval = setInterval(() => {
      timeLeft--;
      timeElement.textContent = timeLeft;

      // If time runs out, end the quiz
      if (timeLeft <= 0) {
          endQuiz();
      }
  }, 1000);
}

function endQuiz() {
  // Clear the timer interval
  clearInterval(timerInterval);
  // Hide the question container
  questionContainer.style.display = "none";
  // Show the save score button
  //button not showing up...circle back
  saveScoreButton.style.display = "block";
}

function saveScore() {
  // Prompt the user for initials and save score logic
  const initials = prompt("Enter your initials:");
  // Save initials and score logic goes here (this is just an alert for now)
  alert(`Score saved for ${initials}!`);
}

