import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");

  // Função para limpar tudo (AC)
  const handleClear = () => {
    setInput("0");
  };

  // Função para apagar último caractere (CE)
  const handleClearEntry = () => {
    setInput((prev) => {
      if (prev.length === 1) return "0";
      return prev.slice(0, -1);
    });
  };

  // Função para adicionar valor (número ou operador)
  const handleClick = (value) => {
    // Evitar múltiplos zeros no começo
    if (input === "0" && value === "0") return;

    // Substituir 0 inicial por outro número ou ponto
    if (input === "0" && value !== ".") {
      setInput(value);
      return;
    }

    // Evitar dois pontos no mesmo número (mais complexo pode ser feito)
    if (value === "." && input.endsWith(".")) return;

    setInput((prev) => prev + value);
  };

  // Função para calcular resultado
  const handleEquals = () => {
    try {
      // Avalia a expressão (atenção: usar com cuidado)
      // Pode usar biblioteca para expressão segura, se quiser
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div id="display" className="display">{input}</div>

        {/* Linha 1 */}
        <button id="clear" onClick={handleClear}>AC</button>
        <button id="clear-entry" onClick={handleClearEntry}>CE</button>
        <button id="divide" onClick={() => handleClick("/")}>/</button>
        <button id="multiply" onClick={() => handleClick("*")}>*</button>

        {/* Linha 2 */}
        <button id="seven" onClick={() => handleClick("7")}>7</button>
        <button id="eight" onClick={() => handleClick("8")}>8</button>
        <button id="nine" onClick={() => handleClick("9")}>9</button>
        <button id="subtract" onClick={() => handleClick("-")}>-</button>

        {/* Linha 3 */}
        <button id="four" onClick={() => handleClick("4")}>4</button>
        <button id="five" onClick={() => handleClick("5")}>5</button>
        <button id="six" onClick={() => handleClick("6")}>6</button>
        <button id="add" onClick={() => handleClick("+")}>+</button>

        {/* Linha 4 */}
        <button id="one" onClick={() => handleClick("1")}>1</button>
        <button id="two" onClick={() => handleClick("2")}>2</button>
        <button id="three" onClick={() => handleClick("3")}>3</button>

        {/* Botão "=" vertical, ocupa duas linhas */}
        <button id="equals" onClick={handleEquals}>=</button>

        {/* Linha 5 */}
        <button id="zero" onClick={() => handleClick("0")} className="span-two">0</button>
        <button id="decimal" onClick={() => handleClick(".")}>.</button>
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
      By Dev Eyer
    </footer>
    </div>
  );
}

export default App;
