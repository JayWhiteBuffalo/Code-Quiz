
  const startBtn = document.getElementById('start');
  const questionTitle = document.getElementById('question-title');
  const timerEl = document.getElementsByClassName('timer');

  let displayedQuestion = {};
  let acceptingAnswers = false;
  let score = 0;
  let questionCounter = 0;
  let availableQuestions = [];
  let questions = [
    {
      question: 'what color is the sky',
      options: ['red', 'green', 'blue', 'purple'],
      answer: 'blue',
    },
    {
      title: 'what color is the sun',
      options: ['yellow', 'green', 'blue', 'purple'],
      answer: 'yellow',
    }
  ]

  //
  let time = questions.length * 20;
  let timerTick;
  const wrongAnswer = -10;
  
  //startGame
  //startGame = () =>{
    //questionCounter = 0;
   // score = 0;
    //availableQuestion = [...questions];
    //getNewQuestion();
 // };

  //getNewQuestion = () => {
    //if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
        //go to end page
        //return window.location.assign('/end.html');
    //}
    //questionCounter++;
    //const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //currentQuestion = availableQuestions[questionIndex];
    //question.innerText = currentQuestion.question;

    //answers.forEach((answers) => {
    //    const number = choice.dataset['number'];
    //    chioce.innerText = currentQuestion['chioce' + number];
    //});

  //}


  // functions
  function startGame() {
    //hide homepage screen
    let homepage = document.getElementById('homepage');
    homepage.setAttribute('class', 'hide');
    //Display timer
    timerEl.removeAttribute('class', 'hide');
    timerEl.textContent = time;
    //start timer
    timerTick = setInterval(clockTick, 1000);
    //Display questions

  }

    function clockTick(){
        //update time
        time--;
        timerEl.textContent=  time;

        //When clock hits 0 run HighScore
        if(time <= 0) {
            console.log('Times UP!')
        }

  };
 
  

  startBtn.onclick = startGame;
 


  //console.log(questionTitle);
  