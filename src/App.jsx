import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 1',
    question: "Pergunta simulada número 1",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 1
  },
  {
    id: 2,
    text: "",
    question: "Pergunta simulada número 2",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 2
  },
  {
    id: 3,
    text: "",
    question: "Pergunta simulada número 3",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 3
  },
  {
    id: 4,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 4',
    question: "Pergunta simulada número 4",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 4
  },
  {
    id: 5,
    text: "",
    question: "Pergunta simulada número 5",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 0
  },
  {
    id: 6,
    text: "",
    question: "Pergunta simulada número 6",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 1
  },
  {
    id: 7,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 7',
    question: "Pergunta simulada número 7",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 2
  },
  {
    id: 8,
    text: "",
    question: "Pergunta simulada número 8",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 3
  },
  {
    id: 9,
    text: "",
    question: "Pergunta simulada número 9",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 4
  },
  {
    id: 10,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 10',
    question: "Pergunta simulada número 10",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 0
  },
  {
    id: 11,
    text: "",
    question: "Pergunta simulada número 11",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 1
  },
  {
    id: 12,
    text: "",
    question: "Pergunta simulada número 12",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 2
  },
  {
    id: 13,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 13',
    question: "Pergunta simulada número 13",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 3
  },
  {
    id: 14,
    text: "",
    question: "Pergunta simulada número 14",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 4
  },
  {
    id: 15,
    text: "",
    question: "Pergunta simulada número 15",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 0
  },
  {
    id: 16,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 16',
    question: "Pergunta simulada número 16",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 1
  },
  {
    id: 17,
    text: "",
    question: "Pergunta simulada número 17",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 2
  },
  {
    id: 18,
    text: "",
    question: "Pergunta simulada número 18",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 3
  },
  {
    id: 19,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 19',
    question: "Pergunta simulada número 19",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 4
  },
  {
    id: 20,
    text: "",
    question: "Pergunta simulada número 20",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 0
  },
  {
    id: 21,
    text: "",
    question: "Pergunta simulada número 21",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 1
  },
  {
    id: 22,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 22',
    question: "Pergunta simulada número 22",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 2
  },
  {
    id: 23,
    text: "",
    question: "Pergunta simulada número 23",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 3
  },
  {
    id: 24,
    text: "",
    question: "Pergunta simulada número 24",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 4
  },
  {
    id: 25,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 25',
    question: "Pergunta simulada número 25",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 0
  },
  {
    id: 26,
    text: "",
    question: "Pergunta simulada número 26",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 1
  },
  {
    id: 27,
    text: "",
    question: "Pergunta simulada número 27",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 2
  },
  {
    id: 28,
    text: 'TEXTO DE INTERPRETAÇÃO para questão 28',
    question: "Pergunta simulada número 28",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 3
  },
  {
    id: 29,
    text: "",
    question: "Pergunta simulada número 29",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 4
  },
  {
    id: 30,
    text: "",
    question: "Pergunta simulada número 30",
    options: [
      "Alternativa A",
      "Alternativa B",
      "Alternativa C",
      "Alternativa D",
      "Alternativa E"
    ],
    correct: 0
  },
];

export default function App() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutos

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, showResult]);

  const handleSelect = (qId, index) => {
    setAnswers({ ...answers, [qId]: index });
  };

  const calculateScore = () => {
    return questions.reduce((acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0), 0);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h1>Simulado de Português</h1>
      <p><strong>Tempo restante:</strong> {formatTime()}</p>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: 20 }}>
          {q.text && <p style={{ fontStyle: "italic", marginBottom: 5 }}>{q.text}</p>}
          <p><strong>{q.id}. {q.question}</strong></p>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(q.id, idx)}
              style={{
                display: "block",
                width: "100%",
                marginBottom: 5,
                backgroundColor: answers[q.id] === idx ? "#cce5ff" : "#fff",
                border: "1px solid #ccc",
                padding: 10,
                textAlign: "left",
                cursor: "pointer"
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      {!showResult ? (
        <button onClick={() => setShowResult(true)} style={{ padding: 10, width: "100%" }}>Corrigir</button>
      ) : (
        <div style={{ marginTop: 20, fontWeight: "bold" }}>
          Você acertou {calculateScore()} de {questions.length} questões.
        </div>
      )}
    </div>
  );
}