import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [mode, setMode] = useState(true);

  const style = {
    backgroundColor: `${mode ? '#ffffff' : '#282D35'}`,
    color: `${mode ? '#282D35' : '#ffffff'}`,
  };

  const handleMode = () => {
    setMode(prevMode => !prevMode);
    console.log(mode);
  };
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[550px]' style={style}>
        <Header mode={mode} handleMode={handleMode} />
        <Hero mode={mode} />
      </div>
    </div>
  );
}

export default App;
