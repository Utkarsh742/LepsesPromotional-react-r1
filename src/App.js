import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import Usp from './Components/Usp/Usp';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <Cards/>
    <Usp/>
    <Team/>
    {/* <Contact/> */}
    </>
  );
}

export default App;
