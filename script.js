const startBtn = document.querySelector(".start");
const nextBtn = document.querySelector(".next");
const questionElement = document.getElementById("question");
const questionContainer = document.querySelector(".question-container");
const answerBtnsElement = document.querySelector("#answer-buttons");

nextBtn.classList.add("hidden");
questionContainer.classList.add("hidden");
nextBtn.style.marginLeft = "307px";

if (nextBtn.classList.contains("hidden")) {
  startBtn.style.marginLeft = "307px";
}

let currentQuestionIndex, ShuffledQuestions;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("started");
  startBtn.classList.add("hidden");
  ShuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hidden");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestions(ShuffledQuestions[currentQuestionIndex]);
}

function showQuestions(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerBtnsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextBtn.classList.add("hidden");
  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtnsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (ShuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hidden");
  } else {
    startBtn.innerText = "Restart";
    startBtn.classList.remove("hidden");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What are two things you can never eat for breakfast?",
    answers: [
      { text: "Lunch", correct: false },
      { text: "Dinner", correct: false },
      { text: "Both lunch and dinner", correct: true },
      { text: "Neither of then", correct: false },
    ],
  },
  {
    question: "What is always coming but never arrives? ",
    answers: [
      { text: "Today", correct: false },
      { text: "Tomorrow", correct: true },
      { text: "Yesterday", correct: false },
      { text: "Last week", correct: false },
    ],
  },
  {
    question: "What was Walt Disney afraid of?",
    answers: [
      { text: "Spiders", correct: false },
      { text: "Cats", correct: false },
      { text: "Dogs", correct: false },
      { text: "Mice", correct: true },
    ],
  },
  {
    question: "The average person in the US opens what 22 times per day?",
    answers: [
      { text: "Front door", correct: false },
      { text: "A can of soda", correct: false },
      { text: "Refrigerator", correct: true },
      { text: "Window", correct: false },
    ],
  },
  {
    question: "What’s the heaviest organ in the human body?",
    answers: [
      { text: "Brain", correct: false },
      { text: "Liver", correct: true },
      { text: "Skin", correct: false },
      { text: "Heart", correct: false },
    ],
  },
  {
    question:
      "On average, how many seeds are located on the outside of a strawberry?",
    answers: [
      { text: "100", correct: false },
      { text: "400", correct: false },
      { text: "500", correct: false },
      { text: "200", correct: true },
    ],
  },
  {
    question:
      "What color dresses do Chinese women traditionally wear on their wedding day?",
    answers: [
      { text: "Red", correct: true },
      { text: "White", correct: false },
      { text: "Gold", correct: false },
      { text: "Blue", correct: false },
    ]
  }
];
