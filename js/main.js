// set constants
    // trivia sets: array of objects of arrays? so...
const presidentTrivia = {
    questions: {
        question1: 'Who is the current president of the United States?',
        question2: 'Who was the first president of the United States?',
        question3: 'a',
        question4: 'a',
        question5: 'a',
        question6: 'a',
        question7: 'a',
        question8: 'a',
        question9: 'a',
        question10: 'a',
    },
    choices: {
        question1: ['Hillary Clinton','Barack Obama','George Washington','Donald Trump'],
        question2: ['Thomas Jefferson','Alexander Hamilton','George Washington','John Adams'],
        question3: ['a','b','c','d'],
        question4: ['a','b','c','d'],
        question5: ['a','b','c','d'],
        question6: ['a','b','c','d'],
        question7: ['a','b','c','d'],
        question8: ['a','b','c','d'],
        question9: ['a','b','c','d'],
        question10: ['a','b','c','d']
    },
    answers: {
        question1: 'Donald Trump',
        question2: 'George Washington',
        question3: 'a',
        question4: 'a',
        question5: 'a',
        question6: 'a',
        question7: 'a',
        question8: 'a',
        question9: 'a',
        question10: 'a', 
    },
}
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
let triviaList, questionNumber, correctList, wrongList, numberCorrect, numberWrong;

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
$('.play')
    .on(
        'click',
        function(event) {
            console.log('Selected: ' + event.target.innerHTML);
            trivia.forEach(element => { //removes buttons from HTML
                console.log('Removing button: '+ element.innerHTML);
                element.parentNode.removeChild(element);
            });
        let answerTemplate = ` 
            <tr>
                <td><button class= "play">A</button></td>
                <td><button class= "play">B</button></td>
                <td><button class= "play">C</button></td>
                <td><button class= "play">D</button></td>
            </tr>
            ` //append this
        
        });

function triviaSelect() {
    if (event.target.innerHTML === 'U.S. Presidents Trivia') {
        let questionNumber = 1;
        console.log(questionNumber)
        console.log('Running U.S. Presidents Trivia')
        body.style.backgroundColor = 'navy';
        console.log('changing color to navy')
        instructions.innerText = '';
        instructionsText.textContent = "";
        instructions.style.padding = '0px';
        welcome.textContent = presidentTrivia.questions.question1; //Question 1
        }  
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