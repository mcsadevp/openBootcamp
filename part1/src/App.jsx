import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Bueno</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Malo</button>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Bueno: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Malo: {bad}</p>
          <p>Total: {total}</p>
          <p>Promedio: {average.toFixed(2)}</p>
          <p>Positivo: {positivePercentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
