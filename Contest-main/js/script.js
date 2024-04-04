import { questions } from '../json/questions.js';

function displayQuestions(filteredQuestions) {
    const questionBoxes = document.getElementById('questionBoxes');
    questionBoxes.innerHTML = '';

    const questionsToDisplay = filteredQuestions || questions;

    questionsToDisplay.forEach(question => {
        const box = document.createElement('div');
        box.classList.add('question-box');

        const difficultyClass = getDifficultyClass(question.difficulty);
        box.classList.add(difficultyClass);

        const cover = document.createElement('div');
        cover.classList.add('cover');

        const title = document.createElement('div');
        title.classList.add('question-title');
        title.textContent = question.title;

        const details = document.createElement('div');
        details.classList.add('question-details');
        details.textContent = `Raqam: ${question.number} | Qiyinchiligi: ${question.difficulty}% | Dasturlash Tili: ${question.language}`;

        const answerCode = document.createElement('pre');
        answerCode.classList.add('answer-code');

        const codeElement = document.createElement('code');
        codeElement.classList.add(question.language.toLowerCase());
        codeElement.textContent = question.answer;

        answerCode.appendChild(codeElement);

        cover.appendChild(title);
        cover.appendChild(details);
        cover.appendChild(answerCode);

        box.appendChild(cover);
        questionBoxes.appendChild(box);

        box.addEventListener('click', function () {
            copyAnswer(question.answer);
        });
    });

    // Remove the setTimeout function to highlight code immediately
    questionBoxes.querySelectorAll('code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function getDifficultyClass(difficulty) {
    const category = Math.ceil(difficulty / 25);
    return `difficulty${category}`;
}

function copyAnswer(answer) {
    navigator.clipboard.writeText(answer)
        .then(() => {
            console.log('Answer copied to clipboard');
            alert('Javob nusxalandi');
        })
        .catch(err => {
            console.error('Unable to copy answer to clipboard', err);
            alert('Javob nusxalashda muammo paydo boldi');
        });
}

function searchQuestions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredQuestions = questions.filter(question =>
        question.title.toLowerCase().includes(searchInput) ||
        question.number.toString().includes(searchInput)
    );

    // Use classList.remove() instead of add() to remove 'hide' class
    document.getElementById('questionBoxes').querySelectorAll('.question-box').forEach(box => {
        box.classList.toggle('hide');
    });

    // Remove the setTimeout function to display filtered questions immediately
    displayQuestions(filteredQuestions);
}

document.addEventListener('DOMContentLoaded', function () {
    displayQuestions();

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchQuestions);
});
