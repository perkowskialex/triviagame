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
                question: 'What is the smallest U.S. state?',
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

const secretTrivia = [
    {
        category: 'secret',
        questions: [
            //1
            {
                question: 'A?',
                answers: [
                    'A', 'B', 'C', 'D'
                ],
                correct: 'A',
                answer: null
            },
            //2
            {
                question: 'Mos Def?',
                answers: [
                    'Mathematics', 'Dante Terrell Smith', 'Its the mighty Mos Def', 'Yasiin Bey'
                ],
                correct: 'Yasiin Bey',
                answer: null
            },
            //3
            {
                question: 'What day is it?',
                answers: [
                    'Presentation Day', "Friday", 'tuesday', 'November 8th',
                ],
                correct: 'Presentation Day',
                answer: null
            },
            //4
            {
                question: 'What was your favorite trivia?',
                answers: [
                    'Presidents', 'Geography', 'Texas', 'Pizza',
                ],
                correct: 'Pizza',
                answer: null
            },
            //5
            {
                question: 'Where are you right now?',
                answers: [
                    'At home', 'In a pizzeria', 'Texas', 'Austin',
                ],
                correct: 'Austin',
                answer: null
            },
            //6 
            {
                question: 'Are you enjoying General Assembly?',
                answers: [
                    'Yes', 'Absolutely', 'Most Absolutely', 'Definitely',
                ],
                correct: 'Yes',
                answer: null
            },
            //7
            {
                question: 'Best Big Cat?',
                answers: [
                    'Jaguar', 'Lion', 'Tiger', 'Leopard',
                ],
                correct: 'Jaguar',
                answer: null
            },
            //8    
            {
                question: 'You cannot make every question subjective, that is not how trivia works',
                answers: [
                    'Sorry', 'But', 'I', 'Could not care less',
                ],
                correct: 'I',
                answer: null
            },
            //9
            {
                question: 'I was going to make this Sean Kingston themed but that would be tough',
                answers: [
                    'OK', 'OKAY', 'O K', 'SEAN KINGSTON',
                ],
                correct: 'O K',
                answer: null
            },
            //10
            {
                question: 'Turns out there is not a lot of Sean Kingston trivia',
                answers: [
                    'That makes sense', 'SEAN KINGSTON!', 'I could only find 3 good questions', 'Line Break',
                ],
                correct: 'SEAN KINGSTON!',
                answer: null
            }
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
const secretButtons = document.querySelectorAll('.secretAnswer')

const presQuestionText = document.querySelectorAll('.presQuestion');
const pizzaQuestionText = document.querySelectorAll('.pizzaQuestion');
const geoQuestionText = document.querySelectorAll('.geoQuestion');
const txQuestionText = document.querySelectorAll('.txQuestion');
const secretText = document.querySelectorAll('.secretQuestion')

const instructions = document.querySelector('.instructions');

// app state variables
let triviaList, answerButtons, questionNumber, answerList, numberCorrect, answerCheckList, presidentAnswers, pizzaAnswers, texasAnswers, geographyAnswers, currentTrivia, currentQuestion;

//event listeners
trivia.forEach(element => {
    element.addEventListener('click', triviaSelect);
});
triviaMenu.addEventListener('click', returnToMenu);
instructions.addEventListener('click', showInstructions)


// functions
function init() {
    console.log('running');
    triviaList = ['U.S. Presidents Trivia', 'Texas Trivia', 'Pizza Trivia', 'Geography Trivia', 'Secret Trivia'];
    answerList = [];
    answerCheckList = [];
    presidentAnswers = [];
    pizzaAnswers = [];
    texasAnswers = [];
    geographyAnswers = [];
    secretAnswers = [];
    currentTrivia = '';
    $('.instructionsText').hide();
    $('.boxes').hide();
    $('.answers').hide();
    $('.trivia-menu').hide();
    $('.presidents').hide();
    $('.pizza').hide();
    $('.geography').hide();
    $('.texas').hide();
    $('.secret').hide();
    $('#triviaSecret').hide();
    $('.thanks').hide();
}

function thanksForPlaying() {
    $('.thanks').show();
    $('#triviaSecret').hide();
    body.style.backgroundColor = 'purple';
    body.style.color = 'gold';
    let img = document.createElement('img');
    img.src = 'https://i.imgur.com/iNiKD7x.jpg';
    body.append(img);
    $('.main.splash').hide();
}

function returnToMenu() {
    $('.main-splash').show();
    $('.boxes').hide();
    $('.answers').hide();
    $('.trivia-menu').hide();
    $('.presidents').hide();
    $('.pizza').hide();
    $('.geography').hide();
    $('.texas').hide();
    $('.secret').hide();
    trivia.forEach(function (element, idx) {
        element.textContent = triviaList[idx];
        idx++;
    })
    console.log('returning to menu');
    answerList = [];
    answerCheckList = [];
    if (secretAnswers === true) {
        thanksForPlaying();
    }
    if (presidentAnswers === true && texasAnswers === true && pizzaAnswers === true && geographyAnswers === true && secretAnswers !== true) {
        $('#triviaSecret').show();
        $('#trivia1').hide();
        $('#trivia2').hide();
        $('#trivia3').hide();
        $('#trivia4').hide();
        $('.instructions').hide();
        $('.welcome').hide();
        console.log('secret trivia activated')
    }
    if (presidentAnswers === true) {
        $("#trivia1").css("background-color", 'green');
    }
    if (texasAnswers === true) {
        $("#trivia2").css("background-color", 'green');
    }
    if (pizzaAnswers === true) {
        $("#trivia3").css("background-color", 'green');
    }
    if (geographyAnswers === true) {
        $("#trivia4").css("background-color", 'green');
    }
}

function triviaSelect() {
    console.log('Selected: ' + event.target.innerHTML);
    if (event.target.innerHTML === 'Secret Trivia') {
        $('#triviaSecret').hide();
        $('.secret').show();
        currentTrivia = secretTrivia[0];
        answerButtons = secretButtons;
        questionText = secretText;
        secretAnswers = true;
    }
    if (event.target.innerHTML === 'U.S. Presidents Trivia') {
        $('.main-splash').hide();
        $('.presidents').show();
        presidentAnswers = true;
        currentTrivia = allTrivia[0];
        answerButtons = presButtons
        questionText = presQuestionText;
    }
    if (event.target.innerHTML === 'Pizza Trivia') {
        $('.main-splash').hide();
        $('.pizza').show();
        pizzaAnswers = true;
        currentTrivia = allTrivia[1];
        answerButtons = pizzaButtons
        questionText = pizzaQuestionText;
    }
    if (event.target.innerHTML === 'Geography Trivia') {
        $('.main-splash').hide();
        $('.geography').show();
        geographyAnswers = true;
        currentTrivia = allTrivia[2];
        answerButtons = geoButtons
        questionText = geoQuestionText;
    }
    if (event.target.innerHTML === 'Texas Trivia') {
        $('.main-splash').hide();
        $('.texas').show();
        texasAnswers = true;
        currentTrivia = allTrivia[3];
        answerButtons = txButtons;
        questionText = txQuestionText;
    }
    play();
}

function showInstructions() {
    $('.instructions').show();
    $('.instructionsText').toggle();
}

function play() {
    console.log('Running play function for: ' + currentTrivia.category);
    answerList = [];
    questionNumber = 0;
    nextQuestion();
    answerButtons.forEach(element => {
        addEventListener('click', nextQuestion);
        addEventListener('click', answerRender);
    });
    answerButtons.forEach(function (element, idx) {
        element.textContent = currentTrivia.questions[questionNumber].answers[idx];
    })
}

function questionIterate() {
    questionNumber++
}

function nextQuestion() {
    if (event.target.localName !== 'button' || event.target.className === 'play' || event.target.className === 'trivia-menu') {
        return;
    }
    currentQuestion = currentTrivia.questions[questionNumber].question;
    questionText[0].textContent = currentQuestion;
    console.log('running nextQuestion function')
    console.log('current question is: ' + currentQuestion)
}

function answerRender() {
    if (event.target.localName !== 'button' || event.target.className === 'play' || event.target.className === 'trivia-menu') {
        return;
    }
    console.log('running Answer render function')
    currentTrivia.questions[questionNumber].answer = event.target.textContent;
    console.log(currentQuestion + ' setting answer to ' + currentTrivia.questions[questionNumber].answer);
    if (questionNumber === 9) {
        render();
        return;
    }
    questionIterate();
    console.log('QUESTION ###: ' + questionNumber)
    answerButtons.forEach(function (element, idx) {
        element.textContent = currentTrivia.questions[questionNumber].answers[idx];
    })
    nextQuestion();
}

function render() {
    $('.presidents').hide();
    $('.pizza').hide();
    $('.geography').hide();
    $('.texas').hide();
    $('.secret').hide();
    questionNumber = 0;
    numberCorrect = 0;
    answerCheckList = [];
    console.log("***RENDER FUNCTION***");
    console.log('current trivia is: ' + currentTrivia.category)
    currentTrivia.questions.forEach(function (element, idx, question) {
        if (question[idx].answer === question[idx].correct) {
            answerCheckList.push('1');
        }
        if (question[idx].answer !== question[idx].correct) {
            answerCheckList.push('0');
        }
        idx++;
    });
    console.log('correct indices are: ' + answerCheckList)
    drawAnswers();
    drawBoxes();
    $('.trivia-menu').show();
}

function drawAnswers() {
    answerElement = document.createElement('answers');
    currentTrivia.questions.forEach(function (element, idx, question) {
        answerList.push(' ' + (idx + 1) + ': ' + question[idx].answer);
    });
    answerElement.className = "answers"
    body.appendChild(answerElement)
    answerList.join().split(',');
    answerElement.style.fontSize = '20px';
    answerElement.append('Your Answers: ' + answerList);
}

function drawBoxes() {
    $('.boxes').show();
    box.forEach(function (element, idx, box) {
        if (answerCheckList[idx] === '1') {
            console.log(box[idx].id + ' is correct --- changing to green')
            box[idx].style.backgroundColor = 'forestgreen';
        }
        if (answerCheckList[idx] === '0') {
            box[idx].style.backgroundColor = 'darkred';
        }
        idx++
    });
}

//call functions
init();