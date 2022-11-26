import React from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  const dummyJokes = [
    {
      id: 1,
      type: "general",
      setup: "What do you call a bee that lives in America?",
      punchline: "A USB.",
    },
    {
      id: 2,
      type: "programming",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit.",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Jokes</button>
      </section>
      <section>
        <JokeList jokes={dummyJokes} />
      </section>
    </React.Fragment>
  );
}

export default App;
