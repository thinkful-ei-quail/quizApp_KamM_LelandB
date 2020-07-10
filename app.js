'use strict';

/**
 * Example store structure
 */
const store = {
  questions: [
    {
      question: 'In Star Wars Episode IV: A New Hope, which family members did Luke Skywalker live with on Tatooine?',
      answers: [
        'Grandparents',
        'Parents',
        'Aunt and Uncle',
        'Foster Parents'
      ],
      correctAnswer: 'Aunt and Uncle'
    },

    {
      question: 'In the Harry Potter movies, what was the name of Harry\'s owl?',
      answers: [
        'Hedwig',
        'Hagrid',
        'Dobby',
        'Hermione'
      ],
      correctAnswer: 'Hedwig'
    },

    {
      question: 'In Quentin Tarantino\'s Kill Bill after Uma Thurman\'s character wakes up from her coma, what was the body part she focused on moving to break her paralysis?',
      answers: [
        'Big Toe',
        'Pinky Toe',
        'Middle Toe',
        'Elbow'
      ],
      correctAnswer: 'Big Toe'
    },

    {
      question: 'In The Lord of the Rings: Return of the King, what was the name of the reforged sword Aragorn receives from Elrond?',
      answers: [
        'Sting',
        'Excalibur',
        'Icing Death',
        'Narsil'
      ],
      correctAnswer: 'Narsil'
    },
    {
      question: 'In Stanley Kubrik\'s A Clockwork Orange what was the main beverage being served in the bar scene?',
      answers: [
        'Whiskey',
        'Ale',
        'Orange Juice',
        'Milk'
      ],
      correctAnswer: 'Milk'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


function startPage() {
  $(window).on('load', event => {
    $('main').html(`<div class="border" id="main-box">
    <h2>Welcome!</h2>
    <h3>Would you like to start the Movie Trivia Quiz?</h3>
    <hr>
    <button type="button" class="item" id="start-button">YES</button>
    </div>`);
  });
}

function startQuestions(){
  $('main').on('click', '#start-button', event=>{
    let html = renderHtml();
    $('main').html(html);
    store.quizStarted = true;
  })
}

 
function nextQuestion() {
   console.log('registering listener');
  $('main').on('click', '#submit-button', event => {
    event.preventDefault();
    console.log('Submit button clicked');
    if(store.quizStarted){
      let userAnswer = answerCheck(getUserAnswer());
      store.questionNumber += 1;
    }
    
  });
}

function renderHtml() {
  let question = store.questions[store.questionNumber]['question'];
  let answers = store.questions[store.questionNumber]['answers'];
  return `<div class="border" id="main-box">          
  <h2>Question ${store.questionNumber + 1} of 5</h2>
  <h3>${question}</h3>
  <hr>
  <form id='answers'>
      <input type="radio" name="trivia" value="${answers[0]}">
      <label for="${answers[0]}">${answers[0]}</label><br>
      <input type="radio" name="trivia" value="${answers[1]}">
      <label for="${answers[1]}">${answers[1]}</label><br>
      <input type="radio" name="trivia" value="${answers[2]}">
      <label for="${answers[2]}">${answers[2]}</label><br>
      <input type="radio" name="trivia" value="${answers[3]}">
      <label for="${answers[3]}">${answers[3]}</label>
      <br>
      <br>
      <button type="submit" id="submit-button">Submit</button>
  </form>
  <p>Score: ${store.score} of 5</p>
</div>`;
}


function answerCheck(userAnswer){
  
  if (userAnswer===store.questions[store.questionNumber].correctAnswer){
    $('main').html(`<div class="border" id="main-box">
    <h2>Correct!</h2><hr>
    <button type="button" class="item" id="continue-button">Continue</button>
    </div>`  
    );
    scoreIncrease();
    console.log('Correct!');
  } else{
    $('main').html(`<div class="border" id="main-box">
    <h2>Incorrect! Correct answer is ${store.questions[store.questionNumber].correctAnswer}</h2><hr>
    <button type="button" class="item" id="continue-button">Continue</button>
    </div>`  
    );
    console.log("Incorrect!");
  } 
}

function continueButton(){
  $('main').on('click', '#continue-button', event=>{
    console.log('clicked');
    if (store.questionNumber<store.questions.length){
      let html = renderHtml();
      $('main').html(html);
    }else{
      endPage();
    }
  });
}

function restartButton(){
  $('main').on('click', '#restart-button', event=>{
    store.score=0;
    store.questionNumber=0;
    let html = renderHtml();
    $('main').html(html);
  })
}


function getUserAnswer(){
  let userAnswer = $("input[name='trivia']:checked").val();
  console.log(userAnswer);
  return userAnswer;
}

function scoreIncrease(){
  store.score++;
  console.log(store.score);
}


function endPage(){
  $('main').html(`<div class="border" id="main-box">
  <h2>Congratulations! Your score is ${store.score} out of 5.</h2>
  <h3>Would you like to play again, even though you'll be answering the same exact questions?</h3>
  <hr>
  <button type="button" class="item" id="restart-button">YES</button>
  </div>`);
}










function quiz() {
  startPage();
  startQuestions();
  continueButton();
  nextQuestion();
  restartButton();
}


$(quiz);










/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)