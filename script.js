 const questions = [
      {
        question: "Jaka jest typowa wielkość barki rzecznej w Polsce",
        answers: [
          "300 ton",
          "500 ton",
          "1500 ton"
        ],
        correct: "500 ton"

      },
      {
        question: "W Europie największy port rzeczny jako centrum logistyczne znajduje się w",
        answers: [
                    
          "Rotterdamie",
          "Duisburgu",
          "Paryżu"
        ],
        correct: "Duisburgu"
      },
      {
        question:"W Polsce udział transportu wodnego śródlądowego w obsłudze potrzeb przewozowych waha się w granicach",
        answers:[
        "1%",
        "5%",
        "10%"],
        correct: "1%"
      },
      {
        question:"Największym armatorem żeglugi śródlądowej w Polsce jest",
        answers:[
        "żegluga Bydgoska SA",
        "P.P. Żegluga Szczecińska",
        "Odratrans"],
        correct: "Odratrans"
      }
    ];

    let mode = null;
    let currentQ = null;
    let examQuestions = [];
    let examIndex = 0;
    let userAnswers = [];
    let state = 0

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function startLearn() {
      mode = "learn";
      document.getElementById("menu").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      nextLearnQuestion();
    }

    function nextLearnQuestion() {
      state = 0
      const q = questions[Math.floor(Math.random() * questions.length)];
      currentQ = { ...q, answers: shuffle([...q.answers]) };
      renderQuestion(currentQ);
    }

    function startExam() {
      return;
      mode = "exam";
      document.getElementById("menu").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      examQuestions = shuffle([...questions]).slice(0, 5); // np. 5 pytań
      examIndex = 0;
      userAnswers = [];
      showExamQuestion();
    }

    function showExamQuestion() {
      const q = examQuestions[examIndex];
      renderQuestion(q, answer => {
        userAnswers.push(answer);
        if (examIndex + 1 < examQuestions.length) {
          examIndex++;
          showExamQuestion();
        } else {
          showResult();
        }
      });
    }

    function renderQuestion(q) {
      const quizDiv = document.getElementById("quiz");
      quizDiv.innerHTML = `<h2>${q.question}</h2>`;
      shuffle([...q.answers]).forEach(ans => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.textContent = ans;
        btn.onclick = () => choose(q, ans, btn);
        quizDiv.appendChild(btn);
      });
    }

    function choose(q, textContent, btn){
        if(state == 1){
            return;
        }
        if(q.correct == textContent){
            btn.style.background = "LIME";
            state = 1;
        }
        else{
            btn.style.background = "RED";
            state = 1;
            const allButtons = document.getElementById("quiz").querySelectorAll('button');
            allButtons.forEach(ansBtn => {
                if(ansBtn.textContent == q.correct){
                    ansBtn.style.background = "LIME";
                }
            })
        }

        const quizDiv = document.getElementById("quiz");
        const nextBtn = document.createElement("button");
        nextBtn.className = "answer";
        nextBtn.textContent = "Następne pytanie";
        nextBtn.style.marginTop = "32px"
        nextBtn.onclick = () => nextLearnQuestion();
        quizDiv.appendChild(nextBtn)

    }

    function showResult() {
      document.getElementById("quiz").style.display = "none";
      const resultDiv = document.getElementById("result");
      resultDiv.style.display = "block";
      let score = 0;
      examQuestions.forEach((q, i) => {
        if (q.correct === userAnswers[i]) score++;
      });
      const percent = Math.round((score / examQuestions.length) * 100);
      resultDiv.innerHTML = `
        <h2>Twój wynik: ${percent}%</h2>
        <button onclick="location.reload()">Powrót</button>
      `;
    }