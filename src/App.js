import './App.css';
import { ThemeContext } from './Context/Context';
import FirstComponent from './components/FirstComponent';
import GreenButton from './components/GreenButton';
import SecondComponent from './components/SecondComponent';
import { useContext, useEffect, useState } from 'react';
import TealButton from './components/TealButton';
import DarkCyan from './components/DarkCyan';

function App() {
  const {theme} = useContext(ThemeContext)
  console.log(theme);
  useEffect(()=>{

  },[theme])
  return (

    <div className='d-flex justify-content-center align-items-center gap-5' style={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: theme === `${theme}` ? `${theme}` : 'white' }}>

      <FirstComponent/>
      <SecondComponent/>
      <GreenButton/>
      <TealButton/>
      <DarkCyan/> 
    
    </div>
  );
}

export default App;
