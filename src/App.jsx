import React from "react";
import { useState } from "react";
import "./App.css";
import GeneralEstructure from "./Components/GeneralEstructure";
const questions = [
  {
    question: "Qual método é utilizado para criar componentes? ",
    options: [
      "React.makeComponent",
      "React.createComponent",
      "React.createElement",
    ],
    reply: "React.createElement",
    id: "p1",
  },
  {
    question: "Como importamos um componente externo?",
    options: [
      "import Component from './Components'",
      " requere('./Component')",
      "import 'Component'",
    ],
    reply: "import Component from './Components'",
    id: "p2",
  },
  {
    question: "Qual Hook não é nativo? ",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    reply: "useFetch()",
    id: "p3",
  },
  {
    question: "Qual palavra deve ser utiliza para criarmos um Hook? ",
    options: ["set", "get", "use"],
    reply: "use",
    id: "p4",
  },
];
function App() {
  const [replys, SetReplys] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slides, setSlides] = useState(0);
  const [result, setResult] = useState(null);

  function handleChange({ target }) {
    SetReplys({ ...replys, [target.id]: target.value });
  }
  function EndResult() {
    const currects = questions.filter(({ reply, id }) => replys[id] === reply);
    setResult(`Você acertou: ${currects.length} de ${questions.length}`);
    console.log(currects);
  }
  function handleClick(event) {
    event.preventDefault();
    if (slides < questions.length - 1) {
      setSlides(slides + 1);
    } else {
      setSlides(slides + 1);
      EndResult();
    }
  }

  return (
    <form className="App">
      {questions.map((question, index) => (
        <GeneralEstructure
          {...question}
          active={slides === index}
          key={question.id}
          onChange={handleChange}
          value={replys[question.id]}
        />
      ))}
      {result ? (
        <p>{result}</p>
      ) : (
        <button onClick={handleClick}>Proximo</button>
      )}
    </form>
  );
}

export default App;
