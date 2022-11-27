import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import { useState } from 'react';


const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(word)
  }

  return (
    <div>
      <Header title='Images Gallery'/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
