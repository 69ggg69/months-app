import React, { useState } from 'react';
import './App.css';

const App = () => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const initialMonths = Array.from({ length: monthNames.length }, () => 1);
  const [months, setMonths] = useState(initialMonths);

  const incrementMonth = (index) => {
    const newMonths = [...months];
    newMonths[index] += 1;
    setMonths(newMonths);
  };

  const decrementMonth = (index) => {
    const newMonths = [...months];
    if (newMonths[index] > 1) {
      newMonths[index] -= 1;
      setMonths(newMonths);
    }
  };

  return (
    <div className="app">
      {months.map((count, index) => (
        <div key={index} className="month-container">
          <div className="month">
            <span>{monthNames[index]}</span>
            <button onClick={() => incrementMonth(index)}>+</button>
            <button onClick={() => decrementMonth(index)}>-</button>
          </div>
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className="month-content">
              {i + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
