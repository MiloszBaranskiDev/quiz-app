const questions = [
  {
    question: 'Najczęściej używany język programowania w tworzeniu stron to:',
    a: 'Java',
    b: 'Python',
    c: 'Javascript',
    d: 'C#',
    correct: 'Javascript',
  },
  {
    question: 'Hipertekstowy język znaczników to:',
    a: 'Html',
    b: 'Css',
    c: 'Php',
    d: 'Sass',
    correct: 'Html',
  },
  {
    question: 'Czym się różnią const i let?',
    a: 'Niczym',
    b: 'Sposobem przypisywania wartości',
    c: 'Rodzajem przechowywanych danych',
    d: 'Let jest przestarzały',
    correct: 'Sposobem przypisywania wartości',
  },
  {
    question: 'Która wartość jest zapisana prawidłowo?',
    a: 'margin-below: 10px;',
    b: 'margin-down: 10px;',
    c: 'margin-bottom: 10px;',
    d: 'margin-low: 10px;',
    correct: 'margin-bottom: 10px;',
  },
  {
    question: 'Czym się różni https i http?',
    a: 'Dostępnością strony',
    b: 'Prędkością serwera',
    c: 'Niczym',
    d: 'Szyfrowaniem danych',
    correct: 'Szyfrowaniem danych',
  },
  {
    question: 'Prawidłowa ścieżka to:',
    a: `script src="main.js"`,
    b: `script link="main.js"`,
    c: `script add="main.js"`,
    d: `script rel="main.js"`,
    correct: `script src="main.js"`,
  },
  {
    question: 'Jak wywołać podany tekst w konsoli?',
    a: `console.show(tekst)`,
    b: `console.log('tekst')`,
    c: `print(tekst)`,
    d: `console(tekst)`,
    correct: `console.log('tekst')`,
  },
  {
    question: 'Którą metodą można dodać element na początek tablicy?',
    a: 'push()',
    b: 'pop()',
    c: 'join()',
    d: 'fill()',
    correct: 'push()',
  },
  {
    question: 'Jaki znacznik jest prawidłowy w celu dodania tekstu?',
    a: '<a>',
    b: '<p>',
    c: '<div>',
    d: '<span>',
    correct: '<p>',
  },
  {
    question: 'Która właściwość odpowiada za zmianę koloru tekstu?',
    a: 'text-color',
    b: 'font-color',
    c: 'set-color',
    d: 'color',
    correct: 'color',
  },
];

const startBtn = document.querySelector('.start');
const nextBtn = document.querySelector('#next-btn');

const questionDiv = document.querySelector('.question');
const header = document.querySelector('header');
const startBox = document.querySelector('.start-box');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');

const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');

const showAnswers = document.querySelector('.show-answers');
const infoText = document.querySelector('#info-text');
const nameInput = document.querySelector('input');
const userName = [];
const userAnswers = [];

const answerDiv = document.querySelectorAll('.answer');

let currentQuestionNumber = 0;
let selectedDiv;
let correctAnswers = 0;

function showResult() {
  quizBox.style.display = 'none';
  infoText.textContent = `Gratulacje ${userName[0]} osiągnąłeś/aś ${correctAnswers} na 10 punktów.`;
  resultBox.style.display = 'block';
  for (let i = 0; i <= userAnswers.length; i++) {
    showAnswers.appendChild(userAnswers[i]);
  }
}

function setShadow() {
  const answer1 = document.querySelector('.answer-first');
  const answer2 = document.querySelector('.answer-second');
  const answer3 = document.querySelector('.answer-third');
  const answer4 = document.querySelector('.answer-fourth');
  answerDiv.forEach((answer) => {
    answer.addEventListener('click', () => {
      if (
        answer1.classList.contains('selected') ||
        answer2.classList.contains('selected') ||
        answer3.classList.contains('selected') ||
        answer4.classList.contains('selected')
      ) {
        answer1.classList.remove('selected');
        answer2.classList.remove('selected');
        answer3.classList.remove('selected');
        answer4.classList.remove('selected');
        answer.classList.add('selected');
        selectedDiv = document.querySelector('.selected');
      } else {
        answer.classList.add('selected');
        selectedDiv = document.querySelector('.selected');
      }
    });
  });
}

function setQuestion() {
  answerDiv.forEach((answer) => {
    answer.classList.remove('selected');
  });
  questionDiv.innerHTML = `
    <h2>
       <span>${currentQuestionNumber + 1}/10 </span>
       ${questions[currentQuestionNumber].question}
    </h2>
  `;
  a_text.innerText = questions[currentQuestionNumber].a;
  b_text.innerText = questions[currentQuestionNumber].b;
  c_text.innerText = questions[currentQuestionNumber].c;
  d_text.innerText = questions[currentQuestionNumber].d;
  setShadow();
}

nextBtn.addEventListener('click', () => {
  if (selectedDiv.classList.contains('selected')) {
    const spanAnswer = document.createElement('span');
    spanAnswer.textContent = selectedDiv.innerText;
    if (selectedDiv.innerText === questions[currentQuestionNumber].correct) {
      spanAnswer.classList.add('correct');
      correctAnswers++;
    } else {
      spanAnswer.classList.add('incorrect');
    }
    userAnswers.push(spanAnswer);
    currentQuestionNumber++;
    if (currentQuestionNumber < 10) {
      setQuestion();
    } else {
      showResult();
    }
  }
});

function changeDiv(e) {
  e.preventDefault();
  if (nameInput.value !== '') {
    header.style.display = 'none';
    startBox.style.display = 'none';
    quizBox.style.display = 'block';
    userName.push(nameInput.value);
    setQuestion();
  } else {
    nameInput.style.backgroundColor = 'rgba(207, 40, 40, 0.25)';
  }
}

startBtn.addEventListener('click', changeDiv);
