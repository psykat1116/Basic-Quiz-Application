const quizQues = [
  {
    question: "Q1: It is an overlap of real world and digital information?",
    a: "Virtual Reality",
    b: "Augmented Reality",
    c: "Mixed Reality",
    d: "Extended Reality",
    ans: "ans2",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Synchronized ",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheet",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "Q3: What is the full form of HTTP",
    a: "Hypertext Transfer Product",
    b: "Hypertext Text Protocol",
    c: "Hey Transfer Protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of HTML",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hypertext Makup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },
  {
    question: "Q5: What is the full form of JS",
    a: "Javascript",
    b: "JustScript",
    c: "JavaSuper",
    d: "JestSuper",
    ans: "ans1",
  },
];

let quest = document.getElementById("quest");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let submitBtn = document.getElementById("submit");
let showRes = document.getElementById("score");
let ansArr = document.querySelectorAll("input");
let result = document.getElementById("comment");
let reset = document.getElementById("startNew");

let i = 0,
  writeAns = 0;

function loadQues() {
  quest.innerHTML = quizQues[i].question;
  option1.innerHTML = quizQues[i].a;
  option2.innerHTML = quizQues[i].b;
  option3.innerHTML = quizQues[i].c;
  option4.innerHTML = quizQues[i].d;
}

const getAnswer = () => {
  let answer;
  ansArr.forEach((e) => {
    if (e.checked) {
      answer = e.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  ansArr.forEach((e) => {
    e.checked = false;
  });
};

submitBtn.onclick = () => {
  const checkAns = getAnswer();
  if (checkAns === quizQues[i].ans) {
    writeAns++;
  }
  i++;
  deselectAll();
  if (i < quizQues.length) {
    loadQues();
  } else {
    showRes.innerHTML = `
        <p id="comment">Your Score is ${writeAns}/${quizQues.length}</p>
        <button type="submit" id="startNew" onclick="location.reload()">Play again</button>
    `;
    showRes.classList.remove("switch");
    return;
  }
};

loadQues();
