const questions = [
    {
        question: "Welche Musikrichtung wurde in den 90er-Jahren durch schnelle Beats, treibende Sounds und große Events bekannt?",
        answers: ["Trance", "Techno", "House", "Drum'n'Bass"],
        correct: 1
    },
    {
        question: "In welcher Stadt startete 1989 eine berühmte Technoparade, die später Millionen von Musikfans anzog?",
        answers: ["Frankfurt am Main", "München", "Berlin", "Hamburg"],
        correct: 2
    },
    {
        question: "Welche Art von Musik kombiniert oft energiegeladene Beats mit einfachen, markanten Textphrasen, die sich ins Gedächtnis brennen?",
        answers: ["Eurodance", "Hardstyle", "Rave", "Ambient"],
        correct: 2
    },
    {
        question: "Welche Veranstaltung war in den 90ern das Highlight für Fans elektronischer Musik und verwandelte Straßen in riesige Tanzflächen?",
        answers: ["Tomorrowland", "Mayday", "Loveparade", "Sensation White"],
        correct: 2
    },
    {
        question: "Welcher Musikstil wurde in den 90er-Jahren von deutschen Künstlern geprägt, die durch energievolle Live-Auftritte und eingängige Beats auffielen?",
        answers: ["Acid House", "Eurodance", "Happy Hardcore", "Techno-Rave"],
        correct: 3
    },
    {
        question: "Welcher Begriff beschreibt eine spezielle Art der Live-Darbietung in der Techno- und Rave-Szene, bei der energiegeladene Musik mit gesprochenen Shouts oder Slogans begleitet wird?",
        answers: ["MCing", "Vocal Sampling", "Shouting Performance", "Hype-Vocals"],
        correct: 0
    },
    {
        question: "Welcher deutsche DJ und Produzent prägte in den 90er-Jahren die Technoszene mit seinem Projekt 'Loveparade' maßgeblich?",
        answers: ["Paul van Dyk", "Sven Väth", "WestBam", "Dr. Motte"],
        correct: 3
    },
    {
        question: "Welche BPM-Zahl (Beats per Minute) ist typisch für die schnelleren Subgenres wie Happy Hardcore und Rave?",
        answers: ["90-110 BPM", "120-140 BPM", "150-170 BPM", "180-200 BPM"],
        correct: 2
    }
];

document.getElementById("start-quiz").onclick = function() {
    // Hier kannst du die Funktion zum Laden der ersten Frage aufrufen
    loadQuestion();
    // Verstecke die Anweisungen und zeige den Quiz-Container
    document.querySelector(".quiz-instructions").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block"; // Quiz-Container anzeigen
};

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = ""; // Clear previous answers

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "btn btn-light m-2";
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            let question = document.getElementById("question").innerText = "Du scheinst ein richtiger Raver zu sein! Du hast alle Fragen korrekt beantwortet!";
            let answers = document.getElementById("answers").innerHTML = ""; // Clear answers
            setTimeout(() => {
                window.location.href = 'final.html';
            }, 3000); // 3 Sekunden warten
        }
    } else {
        showPopup();
    }
}

loadQuestion(); // Load the first question

function showPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
    popup.classList.remove('hidden');
    document.body.classList.add('blink');
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    popup.classList.add('hidden');
    document.body.classList.remove('blink');
}