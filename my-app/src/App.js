import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Nav from './components/nav'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Nav />
      Hey there
      <div className="count-container">
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Footer />
    </div>
  );
}

export default App;
