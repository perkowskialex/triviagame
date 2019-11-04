// set constants
    // trivia sets: array of objects of arrays? so...
const presidentTrivia = [
    {
    question: 'Who is the current president of the United States?',
    answers: [
        'Hillary Clinton','Barack Obama','George Washington', 'Donald Trump'
    ],
    correct: 'Donald Trump'
    },
    {
        question: 'Who was the first president of the United States?',
        answers: {
            a: 'Thomas Jefferson',
            b: 'Alexander Hamilton',
            c: 'John Adams'
        },
        correct: 'George Washington'
    },
    {
        question: 'XXXX?',
        answers: {
            a: 'X',
            b: 'Y',
            c: 'Z'
        },
        correct: '123'
    },  
];

// ];
// classes
// trivia answers split by question 
    // max q's

// cached elements
const trivia = document.querySelectorAll('.play')
const body = document.querySelector('body');
const instructions = document.querySelector('.instructions');
const instructionsText = document.querySelector('.instructionsText');
const welcome = document.querySelector('.welcome');

// app state variables
let triviaList, questionNumber, answerList, numberCorrect, numberWrong;

//event listeners
trivia.forEach(element =>{
   element.addEventListener('click', triviaSelect); 
});
    //  click for which trivia select
    //  click for question - answer 

// functions
        //initialize
function init() {
    console.log('running');
    triviaList = ['presidents','pizza','shrek','soccer'];
    console.log('trivia list: ' + triviaList);
    }
            //console.log('running');
            // What type of trivia do you want to play --- splash
            // Background music
            // randomize questions
                // for loop? math.random...
            // randomize answers --> how can I make it stay linked with the question? array in an object?
        //choose trivia


function triviaSelect() {
    if (event.target.innerHTML === 'U.S. Presidents Trivia') {
        trivia.forEach(function(element, idx) {
            element.textContent = presidentTrivia[0].answers[idx];
            console.log(element.textContent);
            idx++;
        })
        let questionNumber = 1;
        console.log(questionNumber)
        console.log('Running U.S. Presidents Trivia')
        body.style.backgroundColor = 'navy';
        console.log('changing color to navy')
        $('.instructions').toggle();
        welcome.textContent = presidentTrivia[0].question; //Question 1
    }

            // change background, change data
            // pop out trivia from trivia array
        //choose answer
            //if correct 
                // push to answer array with value of 1;
            //if wrong
                // push to answer array with value of 0;
        //render
            //whats the score 
                // answer.forEach (if 0) {x.style.backgroundColor = red}
                // answer.forEach (if 1) {x.style.backgroundColor = green}
            // whats the question and whats the question number
            // is the game over?
                // array length < x
        //game over
            // GOTO: splash screen
            // final score
                // check answer array
            // play again?  
            //try a different trivia?
// function answerCheck() {

// }


//call functions
init();