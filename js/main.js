// set constants
    // trivia sets: array of objects of arrays? so...
const trivias = ['presidents','b','c','d']
const presidentsTrivia = [
    {question1: [answer1, answer2, answer3, answer4]},
    {question2: [answer1, answer2, answer3, answer4]}]
        // classes
        // trivia answers split by question 
    // max q's


// app state variables
let trivias

//event listeners
    //  click for which trivia select
    //  click for question - answer 

// functions
        //initialize
            //console.log('running');
            // What type of trivia do you want to play --- splash
            // Background music
            // randomize questions
                // for loop? math.random...
            // randomize answers --> how can I make it stay linked with the question? array in an object?
        //choose trivia 
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

//call functions
// init();