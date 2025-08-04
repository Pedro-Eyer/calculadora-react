import React, { useState } from "react";
import "./App.css"; // Se quiser adicionar estilo

function App() {
  const [input, setInput] = useState("0");

  // Função principal que lida com os cliques nos botões
  const handleClick = (value) => {
    // Impede múltiplos zeros à esquerda
    if (input === "0") {
      if (value === "0") return; // Evita "00"
      if (value !== ".") {
        setInput(value); // Substitui o 0 por outro número
        return;
      }
    }

    // Evita múltiplos pontos decimais no mesmo número
    const tokens = input.split(/[\+\-\*\/]/);
    const lastToken = tokens[tokens.length - 1];
    if (value === "." && lastToken.includes(".")) return;

    setInput((prev) => prev + value);
  };

  // Lida com o botão "AC"
  const handleClear = () => {
    setInput("0");
  };

  // Lida com o botão "="
  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="calculator">
      {/* Tela da calculadora */}
      <div id="display">{input}</div>

      {/* Botões */}
      <div className="buttons">
        <button id="clear" onClick={handleClear}>AC</button>
        <button id="divide" onClick={() => handleClick("/")}>/</button>
        <button id="multiply" onClick={() => handleClick("*")}>x</button>
        <button id="seven" onClick={() => handleClick("7")}>7</button>
        <button id="eight" onClick={() => handleClick("8")}>8</button>
        <button id="nine" onClick={() => handleClick("9")}>9</button>
        <button id="subtract" onClick={() => handleClick("-")}>-</button>
        <button id="four" onClick={() => handleClick("4")}>4</button>
        <button id="five" onClick={() => handleClick("5")}>5</button>
        <button id="six" onClick={() => handleClick("6")}>6</button>
        <button id="add" onClick={() => handleClick("+")}>+</button>
        <button id="one" onClick={() => handleClick("1")}>1</button>
        <button id="two" onClick={() => handleClick("2")}>2</button>
        <button id="three" onClick={() => handleClick("3")}>3</button>
        <button id="equals" onClick={handleEqual}>=</button>
        <button id="zero" onClick={() => handleClick("0")}>0</button>
        <button id="decimal" onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default App;
