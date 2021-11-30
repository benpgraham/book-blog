import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
