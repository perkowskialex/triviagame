// set constants
const allTrivia = [
    {
        category: 'presidents',
        questions: [
            //1
            {
                question: 'Who is the current president of the United States?',
                answers: [
                    'Hillary Clinton', 'Barack Obama', 'George Washington', 'Donald Trump'
                ],
                correct: 'Donald Trump',
                answer: null
            },
            //2
            {
                question: 'Who was the first president of the United States?',
                answers: [
                    'Thomas Jefferson', 'George Washington', 'Alexander Hamilton', 'John Adams'
                ],
                correct: 'George Washington',
                answer: null
            },
            //3
            {
                question: 'Who was the only U. S. President to also serve as Chief Justice of the Supreme Court?',
                answers: [
                    'William Howard Taft', 'Abraham Lincoln', 'Theodore Roosevelt', 'Millard Fillmore',
                ],
                correct: 'William Howard Taft',
                answer: null
            },
            //4
            {
                question: 'Who was the first U.S. President to be born an American citizen?',
                answers: [
                    'Andrew Jackson', 'Martin Van Buren', 'John Quincy Adams', 'William Henry Harrison',
                ],
                correct: 'Martin Van Buren',
                answer: null
            },
            //5
            {
                question: 'Who was the first President to live in the White House?',
                answers: [
                    'George Washington', 'Thomas Jefferson', 'John Adams', 'Harry Truman',
                ],
                correct: 'John Adams',
                answer: null
            },
            //6 
            {
                question: 'Which U. S. President made the Louisiana Purchase?',
                answers: [
                    'John Adams', 'James Monroe', 'Andrew Jackson', 'Thomas Jefferson',
                ],
                correct: 'Thomas Jefferson',
                answer: null
            },
            //7
            {
                question: 'Who was the only President to serve more than two terms?',
                answers: [
                    'George Washington', 'Franklin Delano Roosevelt', 'Abraham Lincoln', 'Andrew Jackson',
                ],
                correct: 'Franklin Delano Roosevelt',
                answer: null
            },
            //8    
            {
                question: 'What presidential candidate played a saxophone on The Arsenio Hall Show during his campaign?',
                answers: [
                    'George W. Bush', 'Bill Clinton', 'Ronald Reagan', 'Bob Dole',
                ],
                correct: 'Bill Clinton',
                answer: null
            },
            //9
            {
                question: 'Who was the first President to be impeached?',
                answers: [
                    'Bill Clinton', 'Donald Trump', 'Andrew Johnson', 'Richard Nixon',
                ],
                correct: 'Andrew Johnson',
                answer: null
            },
            //10
            {
                question: 'Who was the youngest U. S. President?',
                answers: [
                    'John Fitzgerald Kennedy', 'Bill Clinton', 'Theodore Roosevelt', 'Barack Obama',
                ],
                correct: 'Theodore Roosevelt',
                answer: null
            },
        ]
    },
    {
        category: 'pizza',
        questions: [
            //1
            {
                question: 'Where was the first pizzeria started?',
                answers: [
                    'Palermo', 'New York City', 'Naples', 'Rome'
                ],
                correct: 'Naples',
                answer: null
            },
            //2
            {
                question: 'When is National Pizza Month?',
                answers: [
                    'July', 'October', 'March', 'November'
                ],
                correct: 'October',
                answer: null
            },
            //3
            {
                question: 'Where was the deep dish pizza invented?',
                answers: [
                    'Detroit', 'New York City', 'New Haven', 'Chicago',
                ],
                correct: 'Chicago',
                answer: null
            },
            //4
            {
                question: 'What is the most popular day for pizza?',
                answers: [
                    'Saturday', 'Monday', 'Sunday', 'Friday',
                ],
                correct: 'Saturday',
                answer: null
            },
            //5
            {
                question: 'What is the least popular pizza topping?',
                answers: [
                    'Anchovies', 'Pineapple', 'Spinach', 'Mushrooms',
                ],
                correct: 'Anchovies',
                answer: null
            },
            //6 
            {
                question: 'What is the most common pizza cheese?',
                answers: [
                    'Ricotta', 'Mozzarella', 'Parmesan', 'Provolone',
                ],
                correct: 'Mozzarella',
                answer: null
            },
            //7
            {
                question: 'What is the top day for pizza consumption in the United States?',
                answers: [
                    'Fourth of July', 'New Years Eve', 'Thanksgiving', 'Super Bowl Sunday',
                ],
                correct: 'Super Bowl Sunday',
                answer: null
            },
            //8    
            {
                question: 'What is the most common topping for pizza?',
                answers: [
                    'Olives', 'Cheese', 'Pepperoni', 'Sausage',
                ],
                correct: 'Pepperoni',
                answer: null
            },
            //9
            {
                question: 'How many slices of pizza does the average American eat in a year?',
                answers: [
                    '46', '16', '65', '32',
                ],
                correct: '46',
                answer: null
            },
            //10
            {
                question: 'What is the largest pizza chain?',
                answers: [
                    'Pizza Hut', "Domino's", "Papa John's", 'Chuck E. Cheese',
                ],
                correct: "Domino's",
                answer: null
            },
        ]
    },
    {
        category: 'geography',
        questions: [
            //1
            {
                question: 'What is the largest U.S. state?',
                answers: [
                    'California', 'New York', 'Alaska', 'Texas'
                ],
                correct: 'Alaska',
                answer: null
            },
            //2
            {
                question: 'What is the smallest U.S. state??',
                answers: [
                    'Rhode Island', 'Vermont', 'Hawaii', 'Delaware'
                ],
                correct: 'Rhode Island',
                answer: null
            },
            //3
            {
                question: 'What is the largest lake in North America?',
                answers: [
                    'Lake Michigan', 'Lake Superior', 'Lake of the Ozarks', 'Lake Erie',
                ],
                correct: 'Lake Superior',
                answer: null
            },
            //4
            {
                question: 'What is the largest country?',
                answers: [
                    'Italy', 'Brazil', 'Canada', 'Russia',
                ],
                correct: 'Russia',
                answer: null
            },
            //5
            {
                question: 'What is the capital of Spain?',
                answers: [
                    'Barcelona', 'Sevilla', 'Madrid', 'Toledo',
                ],
                correct: 'Madrid',
                answer: null
            },
            //6 
            {
                question: 'In which continent is Australia?',
                answers: [
                    'North America', 'Europe', 'Australia', 'Africa',
                ],
                correct: 'Australia',
                answer: null
            },
            //7
            {
                question: 'What is the longest river in the world?',
                answers: [
                    'Yangtze', 'Amazon', 'Mississippi', 'Nile',
                ],
                correct: 'Nile',
                answer: null
            },
            //8    
            {
                question: "What is Africa's tallest mountain?",
                answers: [
                    'Kenya', 'Kilimanjaro', 'Mt. Stanley', 'Everest',
                ],
                correct: 'Kilimanjaro',
                answer: null
            },
            //9
            {
                question: 'What country contains the Suez Canal?',
                answers: [
                    'Sudan', 'Israel', 'Suez', 'Egypt',
                ],
                correct: 'Egypt',
                answer: null
            },
            //10
            {
                question: 'In what continent is Morocco?',
                answers: [
                    'Middle East', "South America", "Africa", 'Europe',
                ],
                correct: "Africa",
                answer: null
            },
        ]
    },
    {
        category: 'texas',
        questions: [
            //1
            {
                question: 'What year did Texas gain independence?',
                answers: [
                    '1776', '1836', '1845', '1865'
                ],
                correct: '1836',
                answer: null
            },
            //2
            {
                question: 'What is the capital of Texas?',
                answers: [
                    'Austin', 'Houston', 'Dallas', 'San Antonio'
                ],
                correct: 'Austin',
                answer: null
            },
            //3
            {
                question: 'Who is the Governor of Texas?',
                answers: [
                    'Dan Patrick', 'Rick Perry', 'Ann Richards', 'Gregg Abbott',
                ],
                correct: 'Gregg Abbott',
                answer: null
            },
            //4
            {
                question: 'What year did Texas join the United States?',
                answers: [
                    '1845', '1848', '1789', '1836',
                ],
                correct: '1845',
                answer: null
            },
            //5
            {
                question: 'What is the largest city in Texas?',
                answers: [
                    'El Paso', 'Dallas', 'Austin', 'Houston',
                ],
                correct: 'Houston',
                answer: null
            },
            //6 
            {
                question: 'How many people live in Texas?',
                answers: [
                    '40 million', '29 million', '25 million', '35 million',
                ],
                correct: '29 million',
                answer: null
            },
            //7
            {
                question: 'How many presidents were born in Texas?',
                answers: [
                    '1', '4', '2', '3',
                ],
                correct: '2',
                answer: null
            },
            //8    
            {
                question: "What is the longest river in Texas?",
                answers: [
                    'Colorado River', 'Sabine River', 'Red River', 'Rio Grande',
                ],
                correct: 'Rio Grande',
                answer: null
            },
            //9
            {
                question: 'Who was the first President of Texas?',
                answers: [
                    'Sam Houston', 'Mirabeau Lamar', 'Rick Perry', 'Lorenzo de Zavala',
                ],
                correct: 'Sam Houston',
                answer: null
            },
            //10
            {
                question: 'Where is the Alamo?',
                answers: [
                    'Corpus Christi', "San Antonio", "Austin", 'Victoria',
                ],
                correct: "San Antonio",
                answer: null
            },
        ]
    }
]

// cached elements
const trivia = document.querySelectorAll('.play')
const body = document.querySelector('body');
const main = document.querySelector('.main-splash')
const box = document.querySelectorAll('.box');
const triviaMenu = document.querySelector('.trivia-menu');

const presButtons = document.querySelectorAll('.presAnswer');
const pizzaButtons = document.querySelectorAll('.pizzaAnswer');
const txButtons = document.querySelectorAll('.txAnswer');
const geoButtons = document.querySelectorAll('.geoAnswer');

const presQuestionText = document.querySelectorAll('.presQuestion');
const pizzaQuestionText = document.querySelectorAll('.pizzaQuestion');
const geoQuestionText = document.querySelectorAll('.geoQuestion');
const txQuestionText = document.querySelectorAll('.txQuestion');

// app state variables
let triviaList, answerButtons, questionNumber, answerList, numberCorrect, numberWrong, answerCheckList, presidentAnswers, pizzaAnswers, texasAnswers, geographyAnswers, currentTrivia, currentQuestion, currentAnswer;

//event listeners
trivia.forEach(element => {
    element.addEventListener('click', triviaSelect);
});
triviaMenu.addEventListener('click', returnToMenu);

// functions
function init() {
    console.log('running');
    triviaList = ['U.S. Presidents Trivia', 'Texas Trivia', 'Pizza Trivia', 'Geography Trivia'];
    answerList = [];
    answerCheckList = [];
    presidentAnswers = [];
    pizzaAnswers = [];
    texasAnswers = [];
    geographyAnswers = [];
    currentTrivia = '';
    $('.boxes').hide();
    $('.answers').hide();
    $('.trivia-menu').hide();
    $('.presidents').hide();
    $('.pizza').hide();
    $('.geography').hide();
    $('.texas').hide();
}

function returnToMenu() {
    $('.boxes').hide();
    $('.answers').hide();
    $('.instructions').show();
    $('.trivia-menu').hide();
    welcome.textContent = 'Welcome to Trivia!';
    $('.questions').addClass('play').removeClass('questions')
    $('.play').show().css("background-color", "peru");
    trivia.forEach(function (element, idx) { //change names back
        element.textContent = triviaList[idx];
        idx++;
    })
    console.log('returning to menu');
    answerList = [];
    answerCheckList = [];
    if (presidentAnswers.length > 0) {
        $("#trivia1").css("background-color", 'green');
    }
    if (texasAnswers.length > 0) {
        $("#trivia2").css("background-color", 'green');
    }
    if (pizzaAnswers.length > 0) {
        $("#trivia3").css("background-color", 'green');
    }
    if (geographyAnswers.length > 0) {
        $("#trivia4").css("background-color", 'green');
    }
    body.style.backgroundColor = 'slategray';
}

function triviaSelect() {
    console.log('Selected: ' + event.target.innerHTML);
    if (event.target.innerHTML === 'U.S. Presidents Trivia') {
        $('.main-splash').hide();
        $('.presidents').show();
        currentTrivia = allTrivia[0];
        answerButtons = presButtons
        questionText = presQuestionText;
    }
    if (event.target.innerHTML === 'Pizza Trivia') {
        $('.main-splash').hide();
        $('.pizza').show();
        currentTrivia = allTrivia[1];
        answerButtons = pizzaButtons
        questionText = pizzaQuestionText;
    }
    if (event.target.innerHTML === 'Geography Trivia') {
        $('.main-splash').hide();
        $('.geography').show();
        currentTrivia = allTrivia[2];
        answerButtons = geoButtons
        questionText = geoQuestionText;
    }
    if (event.target.innerHTML === 'Texas Trivia') {
        $('.main-splash').hide();
        $('.texas').show();
        currentTrivia = allTrivia[3];
        answerButtons = txButtons;
        questionText = txQuestionText;
    }
    answerButtons.forEach(element => {
        addEventListener('click', questionSelect);
    });
    play();
}

function play() {
    answerList = [];
    questionNumber = 0;
    console.log('Starting question: ' + questionNumber)
    currentQuestion = currentTrivia.questions[questionNumber].question;
    questionText[0].textContent = currentQuestion;
    console.log('Playing ' + currentTrivia.category);
    answerButtons.forEach(function (element, idx) {
        element.textContent = currentTrivia.questions[questionNumber].answers[idx];
        console.log('answer choice changing to: ' + element.textContent);
    })
}

function questionSelect() {
    if (questionNumber === 10) {
        render();
        return;
    }
    answerButtons.forEach(function (element, idx) {
        element.textContent = currentTrivia.questions[questionNumber].answers[idx];
    })
    if (event.target.localName !== 'button' || event.target.className === 'play') {
        return;
    }
    currentQuestion = currentTrivia.questions[questionNumber].question;
    questionText[0].textContent = currentQuestion;
    currentTrivia.questions[questionNumber].answer = event.target.textContent;
    console.log(currentQuestion + ' setting answer to ' + currentTrivia.questions[questionNumber].answer)
    questionNumber++;
    console.log('current question is: ' + currentQuestion)
    console.log(event.target.textContent);
    console.log('question number: ' + questionNumber)
}

function render() {
    $('.presidents').hide();
    $('.pizza').hide();
    $('.geography').hide();
    $('.texas').hide();
    numberCorrect = 0;
    correctIndex = [];
    console.log("RENDER FUNCTION");
    console.log('current trivia is: ' + currentTrivia.category)
    currentTrivia.questions.forEach(function (element, idx, question) {
        if (question[idx].answer === question[idx].correct) {
            correctIndex.push(idx);
        }
        idx++;
    });
    console.log('correct indices are: ' + correctIndex)
    // drawAnswers();
    drawBoxes();
    $('.trivia-menu').show();
}

// function drawAnswers() {
//     // this function will show all answers and their selection
//     let answerElement = document.createElement('answers');
//     answerElement.className = "answers"
//     body.appendChild(answerElement)
//     answerElement.append('Your Answers: ' + answerList);
//     answerElement.style.fontSize = '20px';
// }  

function drawBoxes() {
    $('.boxes').toggle();
    console.log('correct indices for drawBoxes = ' + correctIndex);
    box.forEach(function (element, idx, box) {
        // console.log('box is: '+box[idx].id);
        if (answerCheckList[idx] === '1') {
            console.log("Box #" + box[idx].id + ' is correct --- changing to green')
            box[idx].style.backgroundColor = 'chartreuse';
        }
        if (answerCheckList[idx] === '0') {
            box[idx].style.backgroundColor = 'darkred';
        }
        box[idx].innerHTML = '';
        idx++
    });
}

//call functions
init();