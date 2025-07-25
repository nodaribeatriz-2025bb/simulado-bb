
import { useState, useEffect } from "react";

const questions = [
[
  {
    "id": 1,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "O objetivo dessa reportagem \u00e9 refletir sobre",
    "options": [
      "a necessidade de implantar um sistema mais seguro do que o cart\u00e3o de cr\u00e9dito para as transfer\u00eancias do aux\u00edlio emergencial.",
      "a sobreviv\u00eancia do dinheiro em esp\u00e9cie frente ao novo mecanismo de transfer\u00eancia eletr\u00f4nica de valores.",
      "as consequ\u00eancias negativas da mudan\u00e7a na cultura popular vigente no pa\u00eds sobre a import\u00e2ncia da inser\u00e7\u00e3o no sistema banc\u00e1rio.",
      "os aspectos relevantes da cultura da informalidade no dia a dia da economia brasileira e as dificuldades de acesso \u00e0 tecnologia.",
      "os impactos dos meios tradicionais de pagamento, como boleto e cart\u00e3o de cr\u00e9dito, na economia da popula\u00e7\u00e3o."
    ],
    "correct": 1
  },
  {
    "id": 2,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "O trecho do texto que explica o sentido do termo 'desbancarizado' \u00e9",
    "options": [
      "o avan\u00e7o das transa\u00e7\u00f5es financeiras eletr\u00f4nicas, em detrimento do uso do dinheiro em papel",
      "aqueles que compram no supermercado com cart\u00e3o de cr\u00e9dito ou usam QR Code para pagar a farm\u00e1cia",
      "a enorme quantidade de brasileiros que n\u00e3o t\u00eam acesso a servi\u00e7os banc\u00e1rios",
      "\u00e0 medida que a popula\u00e7\u00e3o incorpore o sistema \u00e0 sua rotina, o uso de DOC, TED, boletos e cart\u00f5es caia",
      "o pr\u00f3prio com\u00e9rcio incentiva o p\u00fablico mais resistente a aderir a ele"
    ],
    "correct": 2
  },
  {
    "id": 3,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "No par\u00e1grafo 2, o trecho \u201cEssa \u00e9 uma pergunta sem resposta f\u00e1cil\u201d refere-se ao seguinte questionamento:",
    "options": [
      "\u00c9 o fim do DOC e da TED?",
      "O boleto banc\u00e1rio est\u00e1 ainda mais amea\u00e7ado de extin\u00e7\u00e3o?",
      "E o velho cheque vai resistir a esses novos tempos?",
      "o Pix pode reduzir ou acabar com a circula\u00e7\u00e3o das notas de real?",
      "E por que o dinheiro em esp\u00e9cie resiste?"
    ],
    "correct": 3
  },
  {
    "id": 4,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "No texto, o referente da palavra ou express\u00e3o em destaque est\u00e1 corretamente explicitado, entre colchetes, no trecho do",
    "options": [
      "par\u00e1grafo 5 \u2013 [...] por estar acostumado a elas. [c\u00e9dulas]",
      "par\u00e1grafo 6 \u2013 [...] pois implica envio ou recebimento imediato. [modalidade]",
      "par\u00e1grafo 8 \u2013 [...] \u00e0 medida que a popula\u00e7\u00e3o incorpore o sistema \u00e0 sua rotina [papel-moeda]",
      "par\u00e1grafo 8 \u2013 [...] mas isso n\u00e3o acontecer\u00e1 t\u00e3o cedo [cheque]",
      "par\u00e1grafo 9 \u2013 [...] \u00e9 necess\u00e1rio, sobretudo, atacar a desbancariza\u00e7\u00e3o. [diminui\u00e7\u00e3o de circula\u00e7\u00e3o]"
    ],
    "correct": 0
  },
  {
    "id": 5,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "O uso do acento grave indicativo da crase atende \u00e0s exig\u00eancias da norma-padr\u00e3o da l\u00edngua portuguesa em:",
    "options": [
      "o acesso \u00e0 diversas funcionalidades.",
      "relacionada \u00e0 dupla preocupa\u00e7\u00e3o do governo...",
      "come\u00e7aram \u00e0 valorizar mais efetivamente...",
      "correspondem \u00e0 uma categoria muito qualificada...",
      "estabelecidos para \u00e0 abertura de contas banc\u00e1rias..."
    ],
    "correct": 1
  },
  {
    "id": 6,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "A segunda frase expressa, em rela\u00e7\u00e3o \u00e0 primeira, a ideia de:",
    "options": [
      "condi\u00e7\u00e3o",
      "tempo",
      "contradi\u00e7\u00e3o",
      "finalidade",
      "conclus\u00e3o"
    ],
    "correct": 4
  },
  {
    "id": 7,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "No trecho 'implica envio ou recebimento imediato', o sentido de 'implica' \u00e9:",
    "options": [
      "acarretar",
      "comprometer",
      "hostilizar",
      "importunar",
      "requerer"
    ],
    "correct": 0
  },
  {
    "id": 8,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "O emprego da v\u00edrgula est\u00e1 plenamente observado em:",
    "options": [
      "que em outra \u00e9poca, n\u00e3o conseguiam pagar...",
      "por ser um instrumento, pouco confi\u00e1vel...",
      "\u00e9 importante, diagnosticar o p\u00fablico...",
      "ocorrerem roubo e perda do cart\u00e3o, a primeira provid\u00eancia...",
      "seja ela particular ou p\u00fablica requer um cuidado..."
    ],
    "correct": 3
  },
  {
    "id": 9,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "A palavra destacada est\u00e1 empregada corretamente em:",
    "options": [
      "problemas psicol\u00f3gicos causados pelo v\u00edcio da tecnologia.",
      "v\u00eddeos informativos que esclare\u00e7am os usu\u00e1rios...",
      "n\u00e3o tem interesse de garantir um projeto...",
      "para que se reduzam as tentativas de fraude...",
      "entre os principais do pa\u00eds, decidiram que..."
    ],
    "correct": 3
  },
  {
    "id": 10,
    "text": "TEXTO BASE: O Pix muda a forma como realizamos transa\u00e7\u00f5es financeiras...\nEsse avan\u00e7o pode reduzir o uso do papel-moeda, mas ainda h\u00e1 resist\u00eancia por fatores como informalidade, desbancariza\u00e7\u00e3o, cultura e falta de acesso \u00e0 tecnologia.",
    "question": "O pronome est\u00e1 colocado corretamente em:",
    "options": [
      "para que obtenha-se o ideal...",
      "o que considera-se ben\u00e9fico...",
      "encontram muita dificuldade para realiz\u00e1-las.",
      "Desde que implantou-se o Pix...",
      "n\u00e3o sentimo-nos confiantes para operar..."
    ],
    "correct": 2
  }
]
];

export default function App() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2700);

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
