import React from 'react';

import './global.css';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className='overflow-hidden bg-white w-screen h-screen'>
      <Header />
      <Home />
    </div>
  );
};

export default App;
