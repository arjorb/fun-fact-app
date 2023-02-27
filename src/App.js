import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [mode, setMode] = useState(false);

  const style = {
    backgroundColor: `${mode ? '#ffffff' : '#282D35'}`,
    color: `${mode ? '#282D35' : '#ffffff'}`,
  };
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[550px]' style={style}>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
