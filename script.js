
  const startBtn = document.getElementById('start');
  const questionTitle = document.getElementById('question-title');
  const timerEl = document.getElementsByClassName('timer');
  const optionsEl = document.getElementById('options');
  const questionsEl = document.getElementById('questions');
  //Questions Array
  let questions = [
    {
      title: 'what color is the sky',
      options: ['red', 'green', 'blue', 'purple'],
      answer: 'blue',
    },
    {
      title: 'what color is the sun',
      options: ['yellow', 'green', 'blue', 'purple'],
      answer: 'yellow',
    }
  ]
  //variable to track which obj in array is referenced
  let currentQuestionIndex = 0;
  // Quiz Timer length determined by number of questions
  let time = questions.length * 20;
  //This starts the timer countdown
  let timerTick;
  

  // functions
  function startGame() {
    //hide homepage screen
    let homepage = document.getElementById('homepage');
    homepage.setAttribute('class', 'hide');
    //Show questions
    questionsEl.removeAttribute("class", "hide");
    //Display timer
    //timerEl.removeAttribute('class', 'hide');
    //timerEl.textContent = time;
    //start timer
    timerTick = setInterval(clockTick, 1000);
    //Display questions
    getQuestion();

  }

  function getQuestion(){
    //get current question object from array
    let currentQuestion = questions[currentQuestionIndex];

    //Update text with current question
    const titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
  
    //loop for options
    for (let i = 0; i < currentQuestion.options.length; i++){
        //create button for each option
        let options = currentQuestion.options[i];
        let optionsNode = document.createElement('button');
        optionsNode.setAttribute("class", "options");
        optionsNode.setAttribute("value", options);

        optionsNode.textContent = options;
        //display on page
        optionsEl.appendChild(optionsNode);
    
    }
  };

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
