import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Counter</h1>
      <p style={styles.count}>Count: {count}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleDecrement}>Decrement</button>
        <button style={styles.button} onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  count: {
    fontSize: '18px',
    marginBottom: '32px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default CounterComponent;

