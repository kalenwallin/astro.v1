import React, { useState } from "react";
const FibonacciComponent = () => {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null); // New state variable

  const fibonacci = (n) => {
    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
  };

  const handleInputChange = (event) => {
    const inputNum = Number(event.target.value);
    setAnswer(inputNum.toString()); // Update the answer state variable
    const fibResult = fibonacci(inputNum);
    setResult(fibResult); // Update the result state variable
  };

  return (
    <form>
      <label>
        Enter a number:
        <input type="number" value={answer} onChange={handleInputChange} />
      </label>
      {result !== null && ( // Render the result if it's not null
        <p>The Fibonacci number for {Number(answer)} is {result}</p>
      )}
    </form>
  );
};

export default FibonacciComponent;
