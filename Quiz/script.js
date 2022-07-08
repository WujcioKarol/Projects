const questions = {
  q1: {
    question: "What is the capital of the United States?",
    answers: {
      a: "Washington, D.C.",
      b: "New York",
      c: "Los Angeles",
      d: "Chicago",
    },
    correct: "a",
  },
  q2: {
    question: "What is the capital of the United Kingdom?",
    answers: {
      a: "London",
      b: "Paris",
      c: "Dublin",
      d: "Berlin",
    },
    correct: "a",
  },
  q3: {
    question: "What is the capital of the Poland?",

    answers: {
      a: "Warsaw",
      b: "Berlin",
      c: "Paris",
      d: "Rome",
    },
    correct: "a",
  },
  q4: {
    question: "What is the capital of the Germany?",
    answers: {
      a: "Berlin",
      b: "Paris",
      c: "London",
      d: "Rome",
    },
    correct: "a",
  },
  q5: {
    question: "What is the capital of the Italy?",
    answers: {
      a: "Rome",
      b: "Paris",
      c: "London",
      d: "Berlin",
    },
    correct: "a",
  },
};
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const answer = `<input type="radio" name="answer"><label></label>`;
console.log(Math.floor(questions.length));
