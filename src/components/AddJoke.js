import React from 'react';
import { useState } from 'react';

import styles from './AddJoke.module.css';

function AddJoke(props) {
  const [type, setType] = useState('');
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const joke = {
      type,
      setup,
      punchline,
    };

    props.onAddJoke(joke);
    setType('');
    setSetup('');
    setPunchline('');
  };

  const changeType = (e) => {
    setType(e.target.value);
  };

  const changeSetup = (e) => {
    setSetup(e.target.value);
  };

  const changePunchline = (e) => {
    setPunchline(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="type">Type</label>
        <input onChange={changeType} value={type} type="text" id="type"></input>
      </div>
      <div className={styles['control']}>
        <label htmlFor="setup">Setup</label>
        <textarea
          onChange={changeSetup}
          value={setup}
          rows={5}
          type="text"
          id="setup"
        ></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="punchline">Punchline</label>
        <textarea
          onChange={changePunchline}
          value={punchline}
          rows={5}
          type="text"
          id="punchline"
        ></textarea>
      </div>
      <button>Add joke</button>
    </form>
  );
}

export default AddJoke;
