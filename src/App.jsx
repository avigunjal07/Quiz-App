import React from 'react'
import './App.css'
import questions from "./data";
import { useState } from "react";

const App = () => {

   const [questionIndex, setQuestionIndex] = useState(0);
  const [optionStyles, setOptionStyles] = useState({
  0: {},
  1: {},
  2: {},
  3: {},
  });

  const currentQuestion = questions[questionIndex];

  const checkAnswer = (selectedOption,idx) => {
    if (currentQuestion.answer === selectedOption) {
  toast.success("Correct Answer!");

  setOptionStyles({
    ...optionStyles,
    [idx]: { backgroundColor: "lightgreen" }
  });
}

else {
  toast.error(
    "Wrong Answer! The correct answer is: " + currentQuestion.answer
  );

  setOptionStyles({
    ...optionStyles,
    [idx]: { backgroundColor: "lightcoral" },
  });
}

  };

  return (
    <div>
      <h1 className="app-heading">Quiz App</h1>

      <p className="text-question-no">
        Question: {questionIndex + 1}
      </p>

      <p className="text-question">
        {currentQuestion.question}
      </p>

      {currentQuestion.options.map((option, idx) => {
        return (
          <div
            key={idx}
            className="option-card"
            onClick={() => {
              checkAnswer(option,idx);
            }}
          >
            {option}
          </div>
        );
      })}

      <ArrowRight
        className="img-next-question"
        onClick={() => {
          if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
             setOptionStyles({
        0: {},
        1: {},
        2: {},
        3: {},
      });
          }
        }}
      />
      <Toaster />

    </div>
  )
}

export default App
