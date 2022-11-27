import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import { useState } from 'react';

const UNSPLASH_KEY = "YrA_xr58dOu5W_SKJ_kB5xqY1hVNX8Q1oxgqQ6rFaCk";

const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(word)
  fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    })
    setWord("")
  }

  return (
    <div>
      <Header title='Images Gallery'/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
