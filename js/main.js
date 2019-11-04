// set constants
const presidentTrivia = [
    //1
    {
        question: 'Who is the current president of the United States?',
        answers: [
            'Hillary Clinton','Barack Obama','George Washington', 'Donald Trump'
        ],
        correct: 'Donald Trump'
    },
    //2
    {
        question: 'Who was the first president of the United States?',
        answers: [
            'Thomas Jefferson', 'George Washington', 'Alexander Hamilton', 'John Adams'
        ],
        correct: 'George Washington',
    },
    //3
    {
        question: 'Who was the only U. S. President to also serve as Chief Justice of the Supreme Court?',
        answers: [
            'William Howard Taft', 'Abraham Lincoln', 'Theodore Roosevelt', 'Millard Fillmore',
        ],
        correct: 'William Howard Taft'
    },  
    //4
    {
        question: 'Who was the first U.S. President to be born an American citizen?',
        answers: [
            'Andrew Jackson', 'Martin Van Buren', 'John Quincy Adams', 'William Henry Harrison',
        ],
        correct: 'Martin Van Buren'
    },  
    //5
    {
        question: 'Who was the first President to live in the White House?',
        answers: [
            'George Washington', 'Thomas Jefferson', 'John Adams', 'Harry Truman',
        ],
        correct: 'John Adams'
    }, 
    //6 
    {
        question: 'Which U. S. President made the Louisiana Purchase?',
        answers: [
            'John Adams', 'James Monroe', 'Andrew Jackson', 'Thomas Jefferson',
        ],
        correct: 'Thomas Jefferson'
    },  
    //7
    {
        question: 'Who was the only President to serve more than two terms?',
        answers: [
            'George Washington', 'Franklin Delano Roosevelt', 'Abraham Lincoln', 'Andrew Jackson',
        ],
        correct: 'Franklin Delano Roosevelt'
    },  
    //8    
    {
        question: 'What presidential candidate played a saxophone on The Arsenio Hall Show during his campaign?',
        answers: [
            'George W. Bush', 'Bill Clinton', 'Ronald Reagan', 'Bob Dole',
        ],
        correct: 'Bill Clinton'
    },  
    //9
    {
        question: 'Who was the first President to be impeached?',
        answers: [
            'Bill Clinton', 'Donald Trump', 'Andrew Johnson', 'Richard Nixon',
        ],
        correct: 'Andrew Johnson'
    },  
    //10
    {
        question: 'Who was the youngest U. S. President?',
        answers: [
            'John Fitzgerald Kennedy', 'Bill Clinton', 'Theodore Roosevelt', 'Barack Obama',
        ],
        correct: 'Theodore Roosevelt'
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
const box = document.querySelectorAll('.box');

// app state variables
let triviaList, questionNumber, answerList, numberCorrect, numberWrong, answerCheckList;

//event listeners
trivia.forEach(element =>{
   element.addEventListener('click', triviaSelect); 
});
    //  click for which trivia select
    //  click for question - answer 

// functions
        //initialize
function init() {
    $('.boxes').toggle();
    console.log('running');
    triviaList = ['presidents','pizza','shrek','soccer'];
    console.log('trivia list: ' + triviaList);
    answerList = [];
    answerCheckList = [];
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
    correctIndex = [];
    console.log("RENDER FUNCTION");
    console.log(answerList);  // ==> working now
    presidentTrivia.forEach(function(element,idx) {
        if (element.correct === answerList[idx]) {
            answerCheckList.push('1');
        }
        if (element.correct !== answerList[idx]) {
            answerCheckList.push('0');
        }
        idx++
    });
    console.log('answerCheckList = '+ answerCheckList);
    // check answerlist against correct answers
    $('.play').toggle(); //remove buttonz
    for (i=0;i<answerCheckList.length;i++) {
        if (answerCheckList[i] === '1') {
            numberCorrect++;
        }
    }
    welcome.textContent = 'You answered ' + numberCorrect + " out of " + answerList.length + " correctly.";
    drawAnswers();
    drawBoxes();
}

function drawAnswers() {
    // this function will show all answers and their selection
    let answerElement = document.createElement('answers');
    body.appendChild(answerElement)
    answerElement.append('Your Answers: ' + answerList);
    answerElement.style.fontSize = '20px';
}  

function drawBoxes() {
    $('.boxes').toggle();
    console.log('correct indices for drawBoxes = ' +correctIndex);
    box.forEach(function(element, idx, box) {
        console.log('box is: '+box[idx].innerHTML);
        if (answerCheckList[idx] === '1') {
            console.log(box[idx] + ' is correct --- changing to green')
            box[idx].style.backgroundColor = 'chartreuse';
        }
        if (answerCheckList[idx] === '0') {
            box[idx].style.backgroundColor= 'darkred';
        }
        box[idx].innerHTML = '';
        idx++
    });  
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