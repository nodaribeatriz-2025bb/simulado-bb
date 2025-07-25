import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    text: `TEXTO I
“A forma como usamos o dinheiro está mudando. O avanço das transações financeiras eletrônicas, em detrimento do uso do dinheiro em papel, tem transformado a maneira como lidamos com nossas finanças. O Pix, criado pelo Banco Central, acelerou essa mudança, especialmente durante a pandemia, ao permitir transferências rápidas e gratuitas entre pessoas e empresas.”`,
    question: "O objetivo principal do TEXTO I é:",
    options: [
      "Divulgar a história do dinheiro em papel.",
      "Explicar a origem do Banco Central.",
      "Informar sobre mudanças no uso do dinheiro com o Pix.",
      "Criticar os métodos tradicionais de pagamento.",
      "Relatar as dificuldades do sistema bancário."
    ],
    correct: 2
  },
  {
    id: 2,
    text: `TEXTO II
“Um dos efeitos colaterais da pandemia foi o aumento das transações digitais. Mesmo pessoas sem conta em banco foram obrigadas a lidar com o universo digital para receber benefícios do governo, fazer compras ou transferências. Esse fenômeno trouxe à tona a realidade dos chamados ‘desbancarizados’, ou seja, aqueles que não têm acesso a serviços bancários básicos.”`,
    question: "O trecho que melhor define o termo ‘desbancarizados’ é:",
    options: [
      "‘Efeitos colaterais da pandemia’",
      "‘Pessoas com conta em banco’",
      "‘Receber benefícios do governo’",
      "‘Sem acesso a serviços bancários’",
      "‘Compras ou transferências’"
    ],
    correct: 3
  },
  {
    id: 3,
    text: "",
    question: "A palavra ‘gratuitas’ no TEXTO I indica que as transferências por Pix são:",
    options: [
      "Pagas com desconto.",
      "Sem custo para o usuário.",
      "Exclusivas para empresas.",
      "Permitidas somente à noite.",
      "Oferecidas apenas por bancos privados."
    ],
    correct: 1
  },
  {
    id: 4,
    text: "",
    question: "De acordo com os textos, um dos principais efeitos da pandemia foi:",
    options: [
      "A volta do uso de cheques.",
      "A redução dos pagamentos em cartão.",
      "O aumento das transações digitais.",
      "A criação de novos bancos físicos.",
      "O fim do papel-moeda."
    ],
    correct: 2
  },
  {
    id: 5,
    text: "",
    question: "O termo ‘em detrimento do uso do dinheiro em papel’ indica:",
    options: [
      "A substituição gradual por cartões magnéticos.",
      "A preferência crescente por moedas estrangeiras.",
      "A valorização do dinheiro físico.",
      "A queda do uso do papel-moeda.",
      "O aumento da inflação."
    ],
    correct: 3
  }
  // ... (incluir até a questão 45)
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