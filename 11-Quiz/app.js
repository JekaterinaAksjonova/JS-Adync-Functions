async function startQuiz() {
    let finalScore = 0;

    for (let index = 0; index < questions.length; index++) {
        const {question, answers, correct} = questions[index];
        const userInput = await askQuestion(question, answers);
        if (userInput === correct){
            finalScore++;
            console.log("Correct!");
        } else {
            console.log("wrong answer");
        }
    }
    console.log("Final result:" + finalScore);
}

function askQuestion(question, answers) {
    return new Promise(function(resolve, reject){
        let message = question +`\n`;
        answers.forEach((answer, index) => {message += `${index +1}. ${answer}\n`});
        let userInput = prompt(message);
        resolve(parseInt(userInput, 10))
    })
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5"],
        correct: 2
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Mardid", "Paris"],
        correct: 3
    },
    {
        question: "What is the square root of 16?",
        answers: ["4", "5", "6"],
        correct: 1
    }
]
startQuiz();