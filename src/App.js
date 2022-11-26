import React, { useState } from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {

  const [jokes,setJokes] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  function fetchJokersHandler() {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(res => res.json())
    .then(data => {
      setJokes(data);
    });  
  }

  async function fetchJAsyncJokersHandle() {
    setIsLoading(true);
    const res = await fetch('https://official-joke-api.appspot.com/random_ten');
    const data = await res.json();
    // console.log(data );
    setJokes(data);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
      <button onClick={fetchJokersHandler}>Fetch Jokes</button>
      <button onClick={fetchJAsyncJokersHandle}>Fetch Jokes (async)</button>
      </section>
      <section>
      {!isLoading && jokes.length >0  &&<JokeList jokes={jokes} />}
      {!isLoading && jokes.length === 0 && <h2>None jokes</h2>}
      {isLoading && <h1>Loading...</h1> }
      </section>
    </React.Fragment>
  );
}

export default App;
