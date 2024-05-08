import React, { useState } from 'react';

function App() {
    // Define state for the counter
    const [count, setCount] = useState(0);

    // Function to handle incrementing the counter
    const incrementCounter = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
}

export default App;