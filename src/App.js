import Confetti from 'react-confetti'
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div id='container'>
      {count >= 10 &&
        <Confetti
          width={1350}
          height={580} />
      }
      <h1>Counter</h1>
      <div id='goal'>
        <h1>{count}</h1>
      </div>
      <div id="center">
        <div id='first'>
          <button onClick={() => setCount(count + 1)}>Increment +</button>
        </div>
        <div id='secound'>
          <button onClick={() => setCount(count - 1)}>Decrement -</button>
        </div>
      </div>
    </div>
  );
}

export default App;
