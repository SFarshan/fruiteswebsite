import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Appbar from './components/Appbar';
import Filters from './components/filters';
import Items from './components/Items';

function App() {

  return (
    <>
      <Appbar /> 
      <Filters/>
      <Items/>
      
    </>
    
   
    
  )
}

export default App;