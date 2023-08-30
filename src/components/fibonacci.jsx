import React, { useState } from "react";
const FibonacciComponent = () => {
  const [answer, setAnswer] = useState("");

  const fibonacci = (n) => {
    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
  };

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let num = Number(answer);
    const result = fibonacci(num);
    console.log(`The Fibonacci number for ${num} is ${result}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a number:
        <input type="number" value={answer} onChange={handleInputChange} />
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default FibonacciComponent;
