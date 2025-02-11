// Task: A JavaScript-powered quiz app where users answer multiple-choice questions, and their scores are displayed at the end.
// 🔹   Features:
//      * Store questions in an array of objects.
//      * Use DOM Manipulation to display questions dynamically.
//      * Implement Event Listeners for selecting answers.
//      * Use LocalStorage to save the best score.
//      * Show results using Template Literals.
//      * Use setTimeout() for showing correct answers after submission.
//      *Add error handling when fetching data from an API (optional).

let quizData = [];
let currentQuestion = 0;
let score = 0;
let bestScore = localStorage.getItem("bestScore") || 0;
let timer;

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const timerContainer = document.getElementById("timer");

async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data = await response.json();
        quizData = data.results.map((item, index) => ({
            question: item.question,
            options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
            answer: [...item.incorrect_answers, item.correct_answer].sort().indexOf(item.correct_answer)
        }));
        
        if (quizData.length > 0) {
            currentQuestion = 0;
            score = 0;
            loadQuestion();
        } else {
            throw new Error("No questions available");
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
        quizContainer.innerHTML = "<p>Failed to load questions. Please try again later.</p>";
    }
}

function startTimer() {
    let timeLeft = 10;
    timerContainer.textContent = `Time Left: ${timeLeft}s`;
    
    timer = setInterval(() => {
        timeLeft--;
        timerContainer.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            autoSubmit();
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showResults();
        return;
    }
    
    clearInterval(timer);
    quizContainer.innerHTML = "";
    
    const q = quizData[currentQuestion];
    const questionElement = document.createElement("h2");
    questionElement.innerHTML = q.question;
    quizContainer.appendChild(questionElement);
    
    q.options.forEach((option, i) => {
        const label = document.createElement("label");
        label.style.display = "block";
        
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = i;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${option}`));
        quizContainer.appendChild(label);
    });
    
    startTimer();
}

function autoSubmit() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        const correctIndex = quizData[currentQuestion].answer;
        
        if (answerIndex === correctIndex) {
            score++;
        }
    }
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);
    quizContainer.innerHTML = "";
    submitButton.style.display = "none";
    resultContainer.innerHTML = `Your score: ${score} / ${quizData.length}`;
    
    if (score > bestScore) {
        localStorage.setItem("bestScore", score);
        resultContainer.innerHTML += `<br>New Best Score! 🏆`;
    } else {
        resultContainer.innerHTML += `<br>Best Score: ${bestScore}`;
    }
}

submitButton.addEventListener("click", () => {
    autoSubmit();
});

document.addEventListener("DOMContentLoaded", fetchQuestions);
