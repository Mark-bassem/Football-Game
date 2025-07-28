const correctSound = new Audio("correct.mp3");

const wrongSound = new Audio("wrong.mp3");

const allQuestions = [
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
  },
  {
    question: "من فاز بكأس العالم 2014؟",
    answers: ["الأرجنتين", "فرنسا", "البرازيل", "ألمانيا"],
    correct: 3
  },
  {
    question: "من هو مدرب مانشستر سيتي حاليًا؟",
    answers: ["يورغن كلوب", "بيب غوارديولا", "زيدان", "أنشيلوتي"],
    correct: 1
  },
  {
    question: "من هو اللاعب المعروف بلقب 'الملك' في كرة القدم؟",
    answers: ["ميسي", "رونالدو", "بيليه", "مارادونا"],
    correct: 2
  },
  {
    question: "كم مرة فازت الأرجنتين بكأس العالم حتى 2022؟",
    answers: ["مرة", "مرتين", "ثلاث مرات", "أربع مرات"],
    correct: 2
  },
  {
    question: "ما هو أقصى عدد لتبديلات اللاعبين في مباراة رسمية؟",
    answers: ["3", "4", "5", "6"],
    correct: 2
  },
  {
    question: "ما اسم الكرة المستخدمة في كأس العالم 2018؟",
    answers: ["جابولاني", "تيلستار 18", "برازوكا", "أديداس أورا"],
    correct: 1
  },
  {
    question: "من هو صاحب أسرع هدف في تاريخ كأس العالم؟",
    answers: ["رونالدو", "كلينسمان", "هاكان شوكور", "زيدان"],
    correct: 2
  },
  {
    question: "ما عدد بطولات الدوري الإنجليزي التي فاز بها مانشستر يونايتد؟",
    answers: ["13", "15", "18", "20"],
    correct: 3
  },
  {
    question: "من هو أصغر لاعب سجل هدفًا في كأس العالم؟",
    answers: ["مبابي", "بيليه", "رونالدو", "أوين"],
    correct: 1
  },
  {
    question: "من فاز بالحذاء الذهبي في كأس العالم 2018؟",
    answers: ["كريستيانو", "مبابي", "هاري كين", "غريزمان"],
    correct: 2
  },
  {
    question: "ما اسم الدوري الإيطالي؟",
    answers: ["الليغا", "السيري آ", "البوندسليغا", "الليغ 1"],
    correct: 1
  },
  {
    question: "من هو أسطورة كرة القدم الأرجنتينية؟",
    answers: ["بيليه", "رونالدينيو", "مارادونا", "كلوزه"],
    correct: 2
  },
  {
    question: "كم عدد بطولات كأس العالم التي فازت بها ألمانيا؟",
    answers: ["2", "3", "4", "5"],
    correct: 2
  },
  {
    question: "من سجل 'هاتريك' في نهائي كأس العالم 1966؟",
    answers: ["بيليه", "جيف هيرست", "بيكنباور", "بوبي تشارلتون"],
    correct: 1
  },
  {
    question: "من هو حارس مرمى منتخب مصر في كأس العالم 2018؟",
    answers: ["الشناوي", "الحضري", "جنش", "إكرامي"],
    correct: 1
  },
  {
    question: "أي فريق فاز بدوري أبطال أوروبا 2022؟",
    answers: ["ريال مدريد", "ليفربول", "تشيلسي", "مانشستر سيتي"],
    correct: 0
  },
  {
    question: "ما هو عدد النقاط للفوز في مباراة كرة قدم؟",
    answers: ["3", "2", "1", "4"],
    correct: 0
  },
  {
    question: "من هو أول منتخب عربي شارك في كأس العالم؟",
    answers: ["تونس", "مصر", "الجزائر", "المغرب"],
    correct: 1
  },
  {
    question: "أين أُقيم كأس العالم 2022؟",
    answers: ["روسيا", "قطر", "ألمانيا", "أمريكا"],
    correct: 1
  },
  {
    question: "من هو اللاعب الذي فاز بجائزة الكرة الذهبية 7 مرات؟",
    answers: ["رونالدو", "بيليه", "ميسي", "رونالدينيو"],
    correct: 2
  },
  {
    question: "من هو قائد منتخب فرنسا في كأس العالم 2018؟",
    answers: ["غريزمان", "كانتي", "لوريس", "مبابي"],
    correct: 2
  },
  {
    question: "من سجل هدف فوز الأرجنتين بكأس العالم 2022؟",
    answers: ["دي ماريا", "ميسي", "مارتينيز", "مك أليستر"],
    correct: 0
  },
  {
    question: "ما اسم المدرب التاريخي لآرسنال؟",
    answers: ["كلوب", "غوارديولا", "فينغر", "مورينيو"],
    correct: 2
  },
  {
    question: "كم عدد حكام المباراة في كرة القدم؟",
    answers: ["1", "2", "3", "4"],
    correct: 3
  },
  {
    question: "من هو صاحب لقب 'الفتى الذهبي' في إيطاليا؟",
    answers: ["بيرلو", "ديل بييرو", "توتي", "مالديني"],
    correct: 2
  },
  {
    question: "من هو أكثر لاعب فاز بدوري أبطال أوروبا؟",
    answers: ["كريستيانو", "رونالدينيو", "مالديني", "كاسياس"],
    correct: 0
  },
  {
    question: "أين يلعب نادي بايرن ميونيخ؟",
    answers: ["أليانز أرينا", "كامب نو", "سان سيرو", "ستامفورد بريدج"],
    correct: 0
  },
  {
    question: "ما اسم كأس السوبر الأوروبي؟",
    answers: ["سوبر ليغ", "كأس الأبطال", "كأس السوبر", "كأس الأندية"],
    correct: 2
  },
  {
    question: "ما هو المنتخب الذي لعب له زين الدين زيدان؟",
    answers: ["الجزائر", "فرنسا", "إيطاليا", "إسبانيا"],
    correct: 1
  },
  {
    question: "من هو النادي المعروف بـ 'البلوز'؟",
    answers: ["ليفربول", "تشيلسي", "مانشستر يونايتد", "توتنهام"],
    correct: 1
  },
  {
    question: "من هو اللاعب الذي فاز بكأس العالم والكرة الذهبية في نفس السنة؟",
    answers: ["بيليه", "زيدان", "رونالدو البرازيلي", "كانافارو"],
    correct: 3
  },
  {
    question: "من هو أكثر لاعب شارك في مباريات كأس العالم؟",
    answers: ["كلوزه", "بيليه", "ميسي", "رونالدو"],
    correct: 2
  },
  {
    question: "كم عدد فرق الدوري الإنجليزي الممتاز؟",
    answers: ["18", "20", "22", "24"],
    correct: 1
  },
  {
    question: "أي بلد ينظم كأس أمم إفريقيا 2024؟",
    answers: ["مصر", "المغرب", "الكاميرون", "كوت ديفوار"],
    correct: 3
  },
  {
    question: "من هو اللاعب المصري المحترف في ليفربول؟",
    answers: ["تريزيجيه", "النني", "صلاح", "حجازي"],
    correct: 2
  },
  {
    question: "ما هي وظيفة حكم الفيديو VAR؟",
    answers: ["تسجيل المباريات", "تحليل اللعب", "مساعدة الحكم", "اختيار التشكيلة"],
    correct: 2
  },
  {
    question: "أين أُقيمت كأس العالم 2010؟",
    answers: ["ألمانيا", "جنوب إفريقيا", "البرازيل", "فرنسا"],
    correct: 1
  },
  {
    question: "من فاز بدوري أبطال أوروبا 2023؟",
    answers: ["ريال مدريد", "مانشستر سيتي", "إنتر ميلان", "ليفربول"],
    correct: 1
  },
  {
    question: "من هو أشهر لاعب برازيلي اعتزل عام 2023؟",
    answers: ["نيمار", "رونالدينيو", "كاكا", "داني ألفيش"],
    correct: 3
  },
  {
    question: "من هو صاحب الهدف الوحيد في نهائي كأس العالم 2014؟",
    answers: ["أوزيل", "غوتزه", "مولر", "شفاينشتايغر"],
    correct: 1
  },
  {
    question: "ما هو اسم الكأس الإفريقية للأندية؟",
    answers: ["الكونفدرالية", "السوبر", "الأبطال", "التحدي"],
    correct: 2
  },
  {
    question: "من هو نادي 'الشياطين الحمر'؟",
    answers: ["ليفربول", "آرسنال", "مانشستر يونايتد", "بايرن ميونيخ"],
    correct: 2
  },
  {
    question: "من هو حارس مرمى ريال مدريد الحالي؟",
    answers: ["كورتوا", "نافاس", "دي خيا", "كاسياس"],
    correct: 0
  },
  {
    question: "ما اسم البطولة التي تضم أفضل أندية أوروبا؟",
    answers: ["يوروبا ليغ", "سوبر أوروبا", "دوري الأبطال", "دوري الأمم"],
    correct: 2
  },
  {
    question: "من هو مدرب منتخب المغرب في كأس العالم 2022؟",
    answers: ["رونار", "وحيد خليلوزيتش", "وليد الركراكي", "الزاكي"],
    correct: 2
  },
  {
    question: "من هو النادي الأكثر تتويجًا في إفريقيا؟",
    answers: ["الزمالك", "الترجي", "الوداد", "الأهلي"],
    correct: 3
  },
  {
    question: "ما اسم ملعب منتخب مصر؟",
    answers: ["الدفاع الجوي", "برج العرب", "القاهرة الدولي", "السلام"],
    correct: 2
  },
  {
    question: "من هو اللاعب العربي الذي فاز بدوري أبطال أوروبا؟",
    answers: ["رياض محرز", "محمد صلاح", "حكيم زياش", "كلهم"],
    correct: 3
  },
  {
    question: "من هو نادي باريس سان جيرمان الأساسي؟",
    answers: ["فرنسي", "إسباني", "ألماني", "إيطالي"],
    correct: 0
  },
  {
    question: "من هو أكثر لاعب أحرز أهداف دولية في التاريخ؟",
    answers: ["بيليه", "رونالدو", "علي دائي", "كريستيانو رونالدو"],
    correct: 3
  }
];

function getRandomQuestions(count) {
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const questions = getRandomQuestions(10);

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