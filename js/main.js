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

const pizzaTrivia = [
    //1
    {
        question: 'Where was the first pizzeria started?',
        answers: [
            'Palermo','New York City','Naples', 'Rome'
        ],
        correct: 'Naples'
    },
    //2
    {
        question: 'When is National Pizza Month?',
        answers: [
            'July', 'October', 'March', 'November'
        ],
        correct: 'October',
    },
    //3
    {
        question: 'Where was the deep dish pizza invented?',
        answers: [
            'Detroit', 'New York City', 'New Haven', 'Chicago',
        ],
        correct: 'Chicago'
    },  
    //4
    {
        question: 'What is the most popular day for pizza?',
        answers: [
            'Saturday', 'Monday', 'Sunday', 'Friday',
        ],
        correct: 'Saturday'
    },  
    //5
    {
        question: 'What is the least popular pizza topping?',
        answers: [
            'Anchovies', 'Pineapple', 'Spinach', 'Mushrooms',
        ],
        correct: 'Anchovies'
    }, 
    //6 
    {
        question: 'What is the most common pizza cheese?',
        answers: [
            'Ricotta', 'Mozzarella', 'Parmesan', 'Provolone',
        ],
        correct: 'Mozzarella'
    },  
    //7
    {
        question: 'What is the top day for pizza consumption in the United States?',
        answers: [
            'Fourth of July', 'New Years Eve', 'Thanksgiving', 'Super Bowl Sunday',
        ],
        correct: 'Super Bowl Sunday'
    },  
    //8    
    {
        question: 'What is the most common topping for pizza?',
        answers: [
            'Olives', 'Cheese', 'Pepperoni', 'Sausage',
        ],
        correct: 'Pepperoni'
    },  
    //9
    {
        question: 'How many slices of pizza does the average American eat in a year?',
        answers: [
            '46', '16', '65', '32',
        ],
        correct: '46'
    },  
    //10
    {
        question: 'What is the largest pizza chain?',
        answers: [
            'Pizza Hut', "Domino's", "Papa John's", 'Chuck E. Cheese',
        ],
        correct: "Domino's"
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
const triviaMenu = document.querySelector('.trivia-menu');
//how can i select an animation element?? play:hover;

// app state variables
let triviaList, questionNumber, answerList, numberCorrect, numberWrong, answerCheckList, presidentAnswers, currentTrivia;

//event listeners
trivia.forEach(element =>{
   element.addEventListener('click', triviaSelect); 
});
triviaMenu.addEventListener('click', returnToMenu);


    //  click for which trivia select
    //  click for question - answer 

// functions
        //initialize

function init() {
    $('.boxes').toggle();
    $('.trivia-menu').toggle();
    console.log('running');
    triviaList = ['U.S. Presidents Trivia','Shrek Trivia','Pizza Trivia','Soccer Trivia'];
    console.log('trivia list: ' + triviaList);
    answerList = [];
    answerCheckList = [];
    presidentAnswers = [];
    pizzaAnswers = [];
    soccerAnswers = [];
    shrekAnswers = [];
    }

function returnToMenu () {
    $('.boxes').toggle();
    $('.answers').toggle();
    $('.instructions').toggle();
    $('.trivia-menu').toggle();
    welcome.textContent = 'Welcome to Trivia!';
    $('.questions').addClass('play').removeClass('questions')
    $('.play').toggle().css("background-color", "peru");
    trivia.forEach(function(element,idx){ //change names back
        element.textContent = triviaList[idx];
        idx++;
    })
    console.log('returning to menu');
    answerList = [];
    answerCheckList = [];
    if (presidentAnswers.length>0) {
        $("#trivia1").css("background-color", 'green');
    }
    if (pizzaAnswers.length>0) {
        $("#trivia3").css("background-color", 'green');
    }
    body.style.backgroundColor = 'slategray';
}

function triviaSelect() {
    if (event.target.innerHTML === 'U.S. Presidents Trivia') {
        console.log('Running U.S. Presidents Trivia');
        body.style.backgroundColor = 'navy';
        $('.instructions').toggle();
        questionNumber = 1;
        $('.play').addClass('questions').removeClass('play');
        presidents(); //presidents trivia run
    }
    if (event.target.innerHTML === 'Pizza Trivia') {
        console.log('Running Pizza Trivia');
        body.style.backgroundColor = 'tomato';
        $('.instructions').toggle();
        questionNumber = 1;
        $('.play').addClass('questions').removeClass('play');
        pizza(); //Pizza Trivia run
    }
}

function pizza() {
    answerCheckList = [];
    currentTrivia = 'pizza'
    console.log('PIZZA TRIVIA RUNNING');
    console.log('Question number: ' + questionNumber);
    welcome.textContent = pizzaTrivia[0].question;
    trivia.forEach(function(element, idx) {
        element.textContent = pizzaTrivia[0].answers[idx];
        element.style.backgroundColor = 'peru';
        idx++;
    })
    $('.questions').on(
        'click', 
        function(event) {
            if (currentTrivia !== 'pizza') {
                return;
            }
            console.log('jquery pizza click function running')
            let text = event.target.textContent;
            console.log(text);
            answerList.push(text); //add to answer array
            if (questionNumber === pizzaTrivia.length) { //end function if out of questions
                render();
                return;
                }
            console.log(answerList);
            welcome.textContent = pizzaTrivia[questionNumber].question;
            trivia.forEach(function(element,idx){
                element.textContent = pizzaTrivia[questionNumber].answers[idx];
                console.log('Text content for ' + element + ' : ' + element.textContent); 
                idx++; //iterate
            })
            questionNumber++
            console.log("new question number is: "+ questionNumber);
        }
    )
}


function presidents() {
    answerCheckList = [];
    currentTrivia = 'presidents'
    console.log('PRESIDENTS TRIVIA RUNNING')
    console.log('PRESIDENT TRIVIA QUESTION NUMBER = ' + questionNumber)
    welcome.textContent = presidentTrivia[0].question;
    trivia.forEach(function(element, idx) {
        element.textContent = presidentTrivia[0].answers[idx]; //change button text content
        element.style.backgroundColor = 'firebrick'
        // console.log('Text content for ' + element + ' : ' + element.textContent); 
        idx++; //iterate
    });
    // $('.play').addClass('questions').removeClass('play');
    $('.questions').on(
        'click', 
        function(event) {
            if (currentTrivia !== 'presidents') {
                return;
            }            
            console.log('jquery presidents click function running') 
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
    console.log('current trivia is: '+currentTrivia)
    if (currentTrivia === 'presidents') {
        presidentTrivia.forEach(function(element,idx) {
            if (element.correct === answerList[idx]) {
                answerCheckList.push('1');
            }
            if (element.correct !== answerList[idx]) {
                answerCheckList.push('0');
            }
            idx++
        })
        presidentAnswers = answerCheckList;
    };

    if (currentTrivia === 'pizza') {
        pizzaTrivia.forEach(function(element,idx) {
            if (element.correct === answerList[idx]) {
                answerCheckList.push('1');
            }
            if (element.correct !== answerList[idx]) {
                answerCheckList.push('0');
            }
            idx++
        });
        pizzaAnswers = answerCheckList;
    };
    
    console.log('answerCheckList = '+ answerCheckList);
    // check answerlist against correct answers
    $('.questions').toggle(); //remove buttonz
    for (i=0;i<answerCheckList.length;i++) {
        if (answerCheckList[i] === '1') {
            numberCorrect++;
        }
    }
    welcome.textContent = 'You answered ' + numberCorrect + " out of " + answerList.length + " correctly.";
    drawAnswers();
    drawBoxes();
    $('.trivia-menu').toggle();
}

function drawAnswers() {
    // this function will show all answers and their selection
    let answerElement = document.createElement('answers');
    answerElement.className = "answers"
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
            console.log("Box #" + box[idx].innerHTML + ' is correct --- changing to green')
            box[idx].style.backgroundColor = 'chartreuse';
        }
        if (answerCheckList[idx] === '0') {
            box[idx].style.backgroundColor= 'darkred';
        }
        box[idx].innerHTML = '';
        idx++
    });  
}

//call functions
init();