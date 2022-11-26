import React, { useState } from 'react';

import JokeList from './components/JokeList';
import './App.css';
import { useEffect } from 'react';
import { useCallback } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchJokersHandler() {
  //   fetch('https://official-joke-api.appspot.com/random_ten')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setJokes(data);
  //     });
  // }

  const fetchJAsyncJokersHandle = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        'https://official-joke-api.appspot.com/random_ten'
      );
      if (!res.ok) {
        throw new Error('Something wrong!');
      }
      const data = await res.json();
      // console.log(data );
      setJokes(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJAsyncJokersHandle();
  }, [fetchJAsyncJokersHandle]);

  let content = '';
  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else if (error) {
    content = <h2>ERROR {error}</h2>;
  } else {
    if (jokes.length > 0) {
      content = <JokeList jokes={jokes} />;
    } else {
      content = <p>None jokes</p>;
    }
  }

  return (
    <React.Fragment>
      <section>
        {/* <button onClick={fetchJokersHandler}>Fetch Jokes</button> */}
        <button onClick={fetchJAsyncJokersHandle}>Fetch Jokes (async)</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
