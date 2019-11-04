// set constants
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
        answers: [
            'Thomas Jefferson', 'George Washington', 'Alexander Hamilton', 'John Adams'
        ],
        correct: 'George Washington',
    },
    {
        question: 'Who was the only U. S. President to also serve as Chief Justice of the Supreme Court?',
        answers: [
            'William Howard Taft', 'Abraham Lincoln', 'Theodore Roosevelt', 'Millard Fillmore',
        ],
        correct: 'William Howard Taft'
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
    answerList = [];
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
        console.log('Running U.S. Presidents Trivia');
        body.style.backgroundColor = 'navy';
        console.log('changing color to navy');
        $('.instructions').toggle();
        presidents(); //Question 1
    }
}

function presidents() {
    console.log('PRESIDENTS TRIVIA RUNNING')
    let questionNumber = 1;
    console.log('PRESIDENT TRIVIA QUESTION NUMBER = ' + questionNumber)
    welcome.textContent = presidentTrivia[0].question;
    trivia.forEach(function(element, idx) {
        element.textContent = presidentTrivia[0].answers[idx]; //change button text content
        element.style.backgroundColor = 'firebrick'
        // console.log('Text content for ' + element + ' : ' + element.textContent); 
        idx++; //iterate
    });
    // $('.play').addClass('.presidentAnswer').removeClass('.play');
    $('.play').on(
        'click', 
        function(event) {
            let text = event.target.textContent;
            console.log(text);
            answerList.push(text); //add to answer array
            if (questionNumber === presidentTrivia.length) { //end function if out of questions
                render();
                return;
                }
            console.log(answerList);
            welcome.textContent = presidentTrivia[questionNumber].question;
            trivia.forEach(function(element,idx){
                element.textContent = presidentTrivia[questionNumber].answers[idx];
                console.log('Text content for ' + element + ' : ' + element.textContent); 
                idx++; //iterate
            })
            questionNumber++
            console.log("new question number is: "+ questionNumber);
        }
    )
};

function render() {
    numberCorrect = 0;
    console.log("RENDER FUNCTION");
    console.log(answerList);  // ==> working now
    presidentTrivia.forEach(function(element,idx) {
        if (element.correct === answerList[idx]) {
            numberCorrect++;
        }
        idx++
    });
    console.log('number correct: '+ numberCorrect);
    numberWrong = answerList.length-numberCorrect; 
    // check answerlist against correct answers
    $('.play').toggle(); //remove buttonz
    welcome.textContent = 'You scored ' + numberCorrect + " out of " + answerList.length;
}

// end of trivia select
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