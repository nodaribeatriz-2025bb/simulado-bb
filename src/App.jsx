import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Sobre Louis Braille, é correto afirmar que:",
    options: [
      "Queria seguir o ofício do pai.",
      "Estudou com bolsa de estudos.",
      "Trabalhava em selarias quando criança.",
      "Foi adotado por Valentin Haüy depois da tragédia.",
      "Começou a dar aulas quando atingiu a maioridade."
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Qual foi o principal benefício do método Braille?",
    options: [
      "Possibilitar leitura apenas.",
      "Ser um sistema fonético.",
      "Permitir comunicação escrita entre cegos.",
      "Usar letras em relevo.",
      "Substituir o método Haüy."
    ],
    correct: 2
  }
];

export default function SimuladoBancoBrasil() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qId, index) => {
    setAnswers({ ...answers, [qId]: index });
  };

  const calculateScore = () => {
    return questions.reduce((acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0), 0);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Simulado Banco do Brasil</h1>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: 20 }}>
          <p><strong>{q.id}. {q.question}</strong></p>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(q.id, idx)}
              style={{
                display: "block",
                width: "100%",
                marginBottom: 5,
                backgroundColor: answers[q.id] === idx ? "#d1e7dd" : "#f8f9fa",
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