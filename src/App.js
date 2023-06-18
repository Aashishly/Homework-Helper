import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // communicate with API
    // post input value 'prompt' to API end point 
    axios
      .post("http://localhost:5000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    
  };


  return (
    <>
      <header>
        <a href='/'>HomeWork Helper</a>
        <a href='https://github.com/Aashishly'>Github</a>
      </header>
      <div className='wrapper'>
        <div className='mainIntro'>
          <h1>
            Unlock Your Academic Potential with <span>Homework Helper!</span>
          </h1>
          <p>
            Prepare to embark on an extraordinary academic adventure with Homework Hero! Our powerful platform is here to equip you with the tools and knowledge you need to conquer any homework challenge.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Describe your question here' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </form>
        {loading && (
          <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {response && (
          <>
            <div className='resultContainer'>
              <span>ANSWER</span>
              <p>{response}</p>
            </div>
            <footer>Made with ❤️ by Aashish Singh</footer>
          </>
        )}
        <footer>Made with ❤️ by Aashish Singh</footer>
      </div>
    </>
  );
}

export default App;
