const correctSound = new Audio("correct.mp3");

const wrongSound = new Audio("wrong.mp3");

const questions = [
  {
    question: "من هو الهداف التاريخي لكأس العالم؟",
    answers: ["ليونيل ميسي", "رونالدو", "ميروسلاف كلوزه", "بيليه"],
    correct: 2
  },
  {
    question: "كم عدد اللاعبين في كل فريق كرة قدم؟",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },
  {
    question: "ما هو النادي الأكثر فوزًا بدوري أبطال أوروبا؟",
    answers: ["ليفربول", "برشلونة", "ميلان", "ريال مدريد"],
    correct: 3
  },
  {
    question: "أين أُقيمت أول بطولة كأس عالم؟",
    answers: ["البرازيل", "أوروجواي", "إيطاليا", "فرنسا"],
    correct: 1
  },
  {
    question: "من هو أفضل لاعب في العالم لعام 2022؟",
    answers: ["مبابي", "ميسي", "بنزيما", "هالاند"],
    correct: 1
  },
  {
    question: "أي منتخب فاز بكأس العالم 5 مرات؟",
    answers: ["الأرجنتين", "فرنسا", "البرازيل", "ألمانيا"],
    correct: 2
  },
  {
    question: "ما هو اسم ملعب نادي برشلونة؟",
    answers: ["سانتياغو برنابيو", "كامب نو", "أولد ترافورد", "الاتحاد"],
    correct: 1
  },
  {
    question: "من هو أكثر لاعب سجل أهداف في تاريخ كرة القدم؟",
    answers: ["رونالدو", "بيليه", "كريستيانو رونالدو", "مارادونا"],
    correct: 2
  },
  {
    question: "في أي سنة فاز منتخب فرنسا بكأس العالم لأول مرة؟",
    answers: ["1994", "1998", "2002", "2018"],
    correct: 1
  },
  {
    question: "ما هو لون بطاقة الطرد في كرة القدم؟",
    answers: ["أصفر", "أحمر", "أزرق", "أبيض"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

const timerEl = document.createElement("p");
timerEl.style.fontWeight = "bold";
timerEl.style.fontSize = "18px";
document.getElementById("question-box").prepend(timerEl);

function startTimer() {
  timeLeft = 15;
  timerEl.textContent = `الوقت المتبقي: ${timeLeft} ثانية`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `الوقت المتبقي: ${timeLeft} ثانية`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showCorrectAnswer(null); // يعتبره لم يجاوب
      nextBtn.style.display = "inline-block";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      stopTimer();
      selectAnswer(index);
    };
    answersEl.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(index) {
  showCorrectAnswer(index);
  nextBtn.style.display = "inline-block";
}

function showCorrectAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correct;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.style.backgroundColor = "green";
    } else if (i === selectedIndex) {
      btn.style.backgroundColor = "red";
    }
  });

    if (selectedIndex === correctIndex) {
        score++;
        correctSound.play();
    } else {
        wrongSound.play();
    }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    stopTimer();
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("question-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `أجبت بشكل صحيح على ${score} من ${questions.length} أسئلة.`;
}

showQuestion();