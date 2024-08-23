const quizData = [
        {
            question:"1.Which language runs in web browser?",
            a: "java",
            b: "python",
            c: "JavaScript",
            d: "c",
            e: "None of these",
            correct:"c",
        },
    
        {
            question:"2.Number of primitive data types in Java are?",
            a:"6",
            b:"7",
            c:"8",
            d:"0",
            e:"9",
            correct:"c",
        },
        {
            question:"3.What is the size of float and double in java?",
            a:"32 and 64",
            b:"32 and 32 ",
            c:"64 and 32",
            d:"64 and 64",
            e:"None of these",
            correct:"a",
    
        },
        {
            question:"4.What does HTML stand for?",
            a:"Hyper Text Markup Language",
            b:"High Text Markup Language ",
            c:"Hyperlink and Text Markup Language",
            d:"None of the above",
            correct:"a",
    
    
        },
        {
           question: "5.Which of the following is used to create a hyperlink in HTML?",
           a:"<link>",
           b:"<a>",
           c:"<href>",
           d:"<url>",
           correct:"a",
    
        },
        {
            question: "6. What does CSS stand for?",
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Computer Style Sheets",
            d: "Colorful Style Sheets",
            correct: "b",
        },
        {
            question: "7. Which property is used to change the background color in CSS?",
            a: "bg-color",
            b: "background-color",
            c: "color",
            d: "background",
            correct: "b",
        },
        {
            question: "8. Which CSS property controls the text size?",
            a: "font-size",
            b: "text-size",
            c: "size",
            d: "text-font",
            correct: "a",
        },
        {
            question: "9. What is the correct syntax for adding a comment in CSS?",
            a: "// this is a comment",
            b: "<!-- this is a comment -->",
            c: "/* this is a comment */",
            d: "** this is a comment **",
            correct: "c",
        },
        {
            question: "10. Which of the following is a valid CSS selector for targeting all <p> elements?",
            a: "p",
            b: "#p",
            c: ".p",
            d: "*p",
            correct: "a",
        },
        {
            question: "11. Which of the following is a correct way to declare a variable in Java?",
            a: "int 1x = 10;",
            b: "int x = 10;",
            c: "int x;",
            d: "Both B and C",
            correct: "d",
        },
        {
            question: "12. What is the default value of a boolean variable in Java?",
            a: "true",
            b: "false",
            c: "0",
            d: "null",
            correct: "b",
        },
        {
            question: "13. Which of the following is used to create a method in Java?",
            a: "function",
            b: "method",
            c: "subroutine",
            d: "None of the above",
            correct: "d",
        },
        {
            question: "14. What keyword is used to inherit a class in Java?",
            a: "extends",
            b: "implements",
            c: "inherits",
            d: "super",
            correct: "a",
        },
        {
            question: "15. Which of the following is not a primitive data type in Java?",
            a: "int",
            b: "char",
            c: "String",
            d: "boolean",
            correct: "c",
        },
        {
            question: "16. Which of the following is a valid way to declare a variable in JavaScript?",
            a: "var x;",
            b: "let x;",
            c: "const x;",
            d: "All of the above",
            correct: "d",
        },
        {
            question: "17. What does the === operator do in JavaScript?",
            a: "Compares values only",
            b: "Compares types only",
            c: "Compares both value and type",
            d: "None of the above",
            correct: "c",
        },
        {
            question: "18. Which function is used to parse a string as an integer in JavaScript?",
            a: "parseInt()",
            b: "toInteger()",
            c: "Integer.parse()",
            d: "Number()",
            correct: "a",
        },
        {
            question: "19. What is the correct way to write an if statement in JavaScript?",
            a: "if (x > y) { ... }",
            b: "if x > y then { ... }",
            c: "if (x > y) then { ... }",
            d: "if x > y { ... }",
            correct: "a",
        },
        {
            question: "20. Which of the following is a JavaScript data type?",
            a: "String",
            b: "Boolean",
            c: "Undefined",
            d: "All of the above",
            correct: "d",
        }
    
    
    ];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})