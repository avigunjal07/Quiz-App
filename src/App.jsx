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

  return (
    <div>
      
    </div>
  )
}

export default App
