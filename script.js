
  const startBtn = document.getElementById('start');
  const questionTitle = document.getElementById('question-title');
  const timerEl = document.getElementById('timer');
  const optionsEl = document.getElementById('options');
  const questionsEl = document.getElementById('questions');
  const finalScoreEl = document.getElementById('final-score');
  const scoreBtn = document.getElementById('submit')
  
  //Questions Array
  let questions = [
    {
      title: 'what color is the sky',
      options: ['red', 'green', 'blue', 'purple'],
      answer: 'blue',
    },
    {
      title: 'what color is the sun',
      options: ['yellow', 'gray', 'silver', 'gold'],
      answer: 'gold',
    },
    {
        title: 'what color is the sky',
        options: ['red', 'green', 'blue', 'purple'],
        answer: 'blue',
      }
  ]
  //variable to track which obj in array is referenced
  let currentQuestionIndex = 0;
  // Quiz Timer length determined by number of questions
  let time = questions.length * 20;
  //This starts the timer countdown
  let timerTick;
  let finalScore = time;

  // functions
  function startGame() {
    //hide homepage screen
    let homepage = document.getElementById('homepage');
    homepage.setAttribute('class', 'hide');
    //Show questions
    questionsEl.removeAttribute("class", "hide");
    //Initial Clock display appearence
    let timerclkNode = document.createElement("h2");
    timerclkNode.setAttribute("class","timerclk");
    timerclkNode.textContent =  "Time Left:" + time;
    timerEl.appendChild(timerclkNode);
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
    //takes away old set of options
    optionsEl.textContent = "";
  
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
  }

  //User chooses Answer and clicks button
  function chooseAnswer(event){
    let buttonEl = event.target;
    
    //Nothing will happen if user clicks anything that is not a option
    if (!buttonEl.matches('.options')){
        return;}
    if(buttonEl.value !== questions[currentQuestionIndex].answer){

        //Lose time for wrong answer
        time -= 10;
        //Stop timer from going negitive
        if (time <0){
            time = 0;
        }
    }
        //Update timer
        timerEl.textContent = time;
        //Adds one to currentQuestionIndex so it can select a new set of questions in array
        currentQuestionIndex++;
        // Check to see if we have reach end of question array or time has run out
        if (time <= 0 || currentQuestionIndex === questions.length){
            endQuiz();
        }
        //If more questions and timer is not zero, get next question
         else {
            getQuestion();
        }
        }
    
        function endQuiz() {
            //stop timer
            clearInterval(timerTick);
            //clear Questions
            questionsEl.textContent="";
            //clears timer display
            timerEl.textContent = "";
            //show High Score page
            const highScoreEl = document.getElementById("highscore-screen");
            const finalScoreEl = document.getElementById("final-score")
            highScoreEl.removeAttribute("class", "hide");
            //show score
            let finalScoreElNode = document.createElement("h2");
            finalScoreElNode.textContent = time;
            finalScoreEl.appendChild(finalScoreElNode);
        }
    
    //when button is clicked, log user input to localstorage
    //clear text entry box

  


    function clockTick(){
        //update time
        time--;
        clockdisplay();

        //When clock hits 0 run HighScore
        if(time <= 0) {
            time = 0;
            endQuiz();
        }
    function clockdisplay(){
        let timerclkNode = document.createElement("h2");
        //removes last appended time display
        timerEl.textContent="";
        //Creates updated time display
        timerclkNode.setAttribute("class","timerclk");
        timerclkNode.textContent =  "Time Left:" + time;
        timerEl.appendChild(timerclkNode);
        }
    };
    function storeScore(){
        let userScoreInput = document.querySelector("input[name='initials']").value;
        localStorage.setItem("Points-Earned", time);
        localStorage.setItem("Player", userScoreInput );
        
        
        };



  
  //enables user to start quiz by clicking start btn
  startBtn.onclick = startGame;
  //enables user to choose answer and run func by clicking option
  optionsEl.onclick = chooseAnswer;
  //enables user to log score and initials
  scoreBtn.onclick = storeScore;