import React, { useState } from "react";
import "./App.css";
import questions from "./data.js";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[questionIndex];

  const checkAnswer = (selectedOption) => {
    if (answered) return;

    setAnswered(true);

    if (currentQuestion.answer === selectedOption) {
      toast.success("Correct Answer!");
      setScore(score + 1);
    } else {
      toast.error(
        "Wrong Answer! Correct answer is: " +
          currentQuestion.answer
      );
    }
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="result-container">
        <h1>Quiz Completed 🎉</h1>

        <h2>
          Your Score: {score} / {questions.length}
        </h2>

        <button
          onClick={() => {
            setQuestionIndex(0);
            setScore(0);
            setShowResult(false);
            setAnswered(false);
          }}
        >
          Restart Quiz
        </button>

        <Toaster />
      </div>
    );
  }

  return (
    <div>
      <h1 className="app-heading">Quiz App</h1>

      <p className="text-question-no">
        <u>Question: {questionIndex + 1}</u>
      </p>

      <p className="text-question">
        {currentQuestion.question}
      </p>

      {currentQuestion.options.map((option, idx) => {
        return (
          <div
            key={idx}
            className="option-card"
            onClick={() => checkAnswer(option)}
          >
            {option}
          </div>
        );
      })}

      <ArrowRight
        className="img-next-question"
        onClick={nextQuestion}
      />

      <Toaster />
    </div>
  );
};

export default App;