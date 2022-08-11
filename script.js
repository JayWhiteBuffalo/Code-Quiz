
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
      options: ['yellow', 'gray', 'silver', 'gold'],
      answer: 'gold',
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

  //User click an option
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

        }
        //If more questions and timer is not zero, get next question
         else {
            getQuestion();
        }
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

  
  //enables user to start quiz by clicking start btn
  startBtn.onclick = startGame;
  //enables user to choose answer and run func by clicking option
  optionsEl.onclick = chooseAnswer;