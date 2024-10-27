import React, { useState } from 'react';
import './App.css';

// Sample questions data
const questions = [
  {
    questionText: 'What does HTML stand for?',
    options: [
      { answerText: 'Hyper Text Markup Language', isCorrect: true },
      { answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
      { answerText: 'Hyper Text Markup Logic', isCorrect: false },
      { answerText: 'Hyper Tool Markup Language', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is a popular programming language for web development?',
    options: [
      { answerText: 'Python', isCorrect: false },
      { answerText: 'Java', isCorrect: false },
      { answerText: 'JavaScript', isCorrect: false },
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'What does the "www" in a website address stand for?',
    options: [
      { answerText: 'World Wide Web', isCorrect: true },
      { answerText: 'World Web Wide', isCorrect: false },
      { answerText: 'Web World Wide', isCorrect: false },
      { answerText: 'Worldwide Webbing', isCorrect: false },
    ],
  },
  {
    questionText: 'What does CPU stand for?',
    options: [
      { answerText: 'Central Processing Unit', isCorrect: true },
      { answerText: 'Computer Personal Unit', isCorrect: false },
      { answerText: 'Central Programming Unit', isCorrect: false },
      { answerText: 'Core Processing Unit', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the primary purpose of a firewall',
    options: [
      { answerText: 'To speed up internet connections', isCorrect: false },
      { answerText: 'To protect a network form unauthorized access', isCorrect: true },
      { answerText: 'To store data securely', isCorrect: false },
      { answerText: 'To manage hardware resources', isCorrect: false },
    ],
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerResults, setAnswerResults] = useState([]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const result = {
      isCorrect: isCorrect
    };
    setAnswerResults([...answerResults, result]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswerResults([]);
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} out of {questions.length}</h2>
          <ul>
            {answerResults.map((result, index) => (
              <li
                key={index}
                className={result.isCorrect ? 'correct' : 'wrong'}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <button onClick={handleRestartQuiz}>Retake Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          <p>{questions[currentQuestion].questionText}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
