const DATA = [
    {
      question: "What is a baby dolphin called?",
      answers: ["Calf", "Kid", "Pup", "Foal"],
      correctAnswer: "Calf"
    },
    {
      question: "What is the fin on the back of a dolphin known as?",
      answers: ["Fluke", "Ventral", "Dorsal", "Caudal"],
      correctAnswer: "Dorsal"
    },
    {
      question: "How do dolphins sleep?",
      answers: [
        "Like humans, they go completely unconscious for 8 hours.",
        "They are like sharks, they have to stay awake and keep swimming.",
        "They rest one half of their brain at a time, taking little naps throughout the day.",
        "They have endless energy- they do not need rest."
      ],
      correctAnswer:
        "They rest one half of their brain at a time, taking little naps throughout the day."
    },
    {
      question: "What is the camouflage called on a dolphin?",
      answers: ["Dappling", "Grey-fading", "Countershading", "Lateral Lining"],
      correctAnswer: "Countershading"
    },
    {
      question: "How many species of dolphins are there?",
      answers: ["22", "38", "14", "5"],
      correctAnswer: "38"
    },
    {
      question: "How many calves can a dolphin have at once?",
      answers: ["Two", "Three", "One", "Four"],
      correctAnswer: "One"
    },
    {
      question: "What shape are the teeth of a dolphin?",
      answers: ["Rectangular", "Triangular", "Cone-shaped", "Rounded"],
      correctAnswer: "Cone-shaped"
    },
    {
      question: "How long is a dolphin pregnant for?",
      answers: ["9 months", "12 months", "6 months", "18 months"],
      correctAnswer: "12 months"
    },
    {
      question: "Who is dominant is the dolphin social structure?",
      answers: ["Males", "Females", "Adolescents", "Both males and females"],
      correctAnswer: "Females"
    }
  ];
  
  let questionNumber = 0;
  let score = 0;
  
  //start button
  function beginQuiz() {
    $(document).on("click", "a#button", function(e) {
      e.preventDefault();
      generateQuestion();
    });
  }
  
  //generate question
  function generateQuestion() {
    console.log("question", questionNumber);
    console.log("store", STORE.length);
    if (questionNumber < STORE.length) {
      console.log("rendering next question");
      $(".questionCount").text(questionNumber + 1);
      $("main")
        .empty()
        .html(`<div class="question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
        <span>${STORE[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <span>${STORE[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
        <span>${STORE[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
        <span>${STORE[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`);
    } else {
      quizResults();
    }
  }
  
  //question number increment
  function updateQuestionNumber() {
    questionNumber++;
  }
  
  //increment score
  function scoreUpdate() {
    score++;
  }
  
  beginQuiz();
  
  //select answer
  function selectAnswer() {
    $(".answerOption").on("submit", function(event) {
      event.preventDefault();
      let selected = $("input:checked");
      let answer = selected.val();
      let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
      if (answer === correctAnswer) {
        selected.parent().addClass("correct");
        correctAnswer();
      } else {
        selected.parent().addClass("incorrect");
        incorrectAnswer();
      }
    });
  }
  
  //correct answer
  function correctAnswer() {
    scoreUpdate();
    updateQuestionNumber();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $(".mainHeader")
      .empty()
      .html(
        `<div><h1 class="titleHeader">Nailed it!</h1><h2>${correctAnswer} is the way to go!</h2></div>`
      );
  }
  
  //incorrect answer
  function incorrectAnswer() {
    updateQuestionNumber();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $(".mainHeader")
      .empty()
      .html(`<div><h2>Not quite!</h2><h3>${correctAnswer} is the correct answer!</h3><button type=button class="nextButton">Next</button></div>`);
  }

//next question****************
function nextQuestion() {
    ('.main').on('click', '.button',
    function (event) {
    updateQuestionNumber();
    selectAnswer();
    });
}

  //results**********************
  function quizResults() {
    $(".main").empty().html(`
        <div>
          <h1 class="titleHeader">Well done!</h1>
          <h2>You're an aquatic aficionado!</h2>
          <main role="main">
            <div class="completionForm">
              <form class="button">
                <a href="start.html">Restart</a>
              </form>
            </div>
          </main>
        </div>
      `);
  }