import React from 'react';

import { useMediaQuery } from 'react-responsive';

import './global.css';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  const isTableOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });

  return (
    <div className='overflow-hidden'>
      {isTableOrMobile ? (
        <div className='flex flex-col gap-10 justify-center items-center pt-20 px-5'>
          <p className='animate-pulse text-3xl'>Device is not supported</p>
          <p className='animate-pulse text-3xl'>We need space to rotate our Slider</p>
          <p className='animate-pulse text-3xl'>Try do Mobile by yourself</p>
        </div>
      ) : (
        <div className='overflow-hidden bg-white w-screen h-screen'>
          <Header />
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
