import React, { useState } from 'react';
import './App.css';

function CounterComponent() {
  const [count, setCount] = useState(100);

  const increaseCount = () => {
    setCount(previousCount => previousCount + 1);
  };

  const decreaseCount = () => {
    setCount(previousCount => previousCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-wrapper">
      <h1>Hello, User!</h1>
      <h1>Count Value: {count}</h1>
      <button className="btn" onClick={increaseCount}>Add</button>
      <button className="btn" onClick={resetCount}>Reset</button>
      <button className="btn" onClick={decreaseCount}>Subtract</button>
    </div>
  );
}

export default CounterComponent;
